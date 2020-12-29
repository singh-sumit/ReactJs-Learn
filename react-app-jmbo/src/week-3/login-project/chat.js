import React, { useEffect, useState } from "react";
import getCurrentUser from "./loginManager";
import firebase from "firebase";
import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
export default function Chat() {
  const [user, setUser] = useState();
  const [gettingUser, setGettingUser] = useState(true);
  const [msg, setMsg] = useState("");
  const [receivedMsg, setRecievedMsg] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      let user_obj = {};
      user_obj.id = user.uid;
      user_obj.email = user.email;
      user_obj.photoURL = user.photoURL;
      user_obj.name = user.displayName;
      setUser(user_obj);
      setGettingUser(false);
      //console.log(user.name);
      //console.log(user_obj);
    });
    getMsg();
  }, [true]);
  const handleChange = (event) => {
    setMsg(event.target.value);
  };

  const onWriteMsgToDb = async () => {
    try {
      await firebase.database().ref("chat").push({
        content: msg,
        timestamp: Date.now(),
        uid: user.id,
      });
    } catch (error) {
      console.log("error ", error);
    }
  };
  const onSendMsg = () => {
    onWriteMsgToDb().finally(function (res) {
      console.log(res);
    });
  };

  const getMsg = () => {
    try {
      firebase
        .database()
        .ref("chat")
        .on("value", (snapshot) => {
          let chats = [];
          snapshot.forEach((snap) => {
            chats.push(snap.val());
          });
          console.log(chats);
          setRecievedMsg(chats);
        });
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div>
      {gettingUser ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>Welcome {user.email}</h1>
          <div>
            <div>
              {receivedMsg.length
                ? receivedMsg.map((item) => <p>{item.content}</p>)
                : ""}
            </div>
            <Grid container justify="flex-start" spacing={2}>
              <Grid item xs="12" sm="9" style={{ marginTop: "20px" }}>
                <TextField
                  id="outlined-basic"
                  id="msg"
                  label="Message"
                  variant="outlined"
                  placeholder="Enter Message"
                  helperText="Please enter valid name"
                  error={false}
                  //   disabled={isSaving}
                  required={true}
                  fullWidth={true}
                  value={msg}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs="3" sm="3" style={{ marginTop: "20px" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onSendMsg}
                  //   disabled={isSaving}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
}
