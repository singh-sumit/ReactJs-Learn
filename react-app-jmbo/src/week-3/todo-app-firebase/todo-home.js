import { Button, Card, Grid, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import firebase from "firebase";

export default function TodoHome() {
  let history = useHistory();
  let params = useParams();
  // state var
  const [userProfile, setUserProfile] = useState({
    noteId: "",
    userId: "",
    // notes: new Array()
  });
  const [userExitsAt, setUserExistsAt] = useState({
    docId: "",
    flag: false,
    oldNotes: new Array(),
  });
  var dataToPush = {};
  const [auxNotes, setAuxNotes] = useState({
    noteText: "",
    timeStamp: "",
    date: "",
  });
  //to handle input value
  const handleChange = (event) => {
    auxNotes[event.target.id] = event.target.value;
    setAuxNotes({ ...auxNotes, auxNotes });
    console.log("saved notes ", auxNotes);
  };
  // on clicking save buttom
  const onSaveNote = () => {
    // set user id
    // userProfile.userId= params.id;

    console.log("aux ", auxNotes);
    console.log("notes u ", userProfile.notes);
    // userProfile.notes.push(auxNotes);
    // console.log("check", userProfile.notes);
    setUserProfile({ ...userProfile, userProfile });
    console.log("saved ", userProfile);
    dataToPush = {
      userId: userProfile.userId,
      notes: [
        {
          noteText: auxNotes.noteText,
          date: auxNotes.date,
          time: auxNotes.timeStamp,
        },
      ],
    };
    onSaveToDB();
    history.push("/todo-list/" + userProfile.userId);
  };
  // handle saving to firebase
  // var dataToPush={
  //   userId : userProfile.userId,
  //   notes : [{noteText : auxNotes.noteText ,date : auxNotes.date ,time : auxNotes.timeStamp}]
  // }
  const firestore = firebase.firestore();
  const onSaveToDB = () => {
    //
    isOldUser();
    //checking for existing user
    if (userExitsAt.flag === true) {
      //old user
      let newNotes = (dataToPush.notes).concat(userExitsAt.oldNotes);
      // setUserExistsAt([...userExitsAt.oldNotes, userExitsAt.oldNotes]);
      console.log(newNotes);
      firestore
        .collection("todo-collection")
        .doc(userExitsAt.docId)
        .update({
          notes: newNotes,
        })
        .then((response) => alert("success"))
        .catch((error)=>console.log("error occured ",error));
    } else {
      //new user
      firestore
        .collection("todo-collection")
        .add(
          dataToPush
          // userId : userProfile.userId,
          // noteId : 2,
          // "notes[${noteId}]" : userProfile.notes
          // name: userProfile.name,
        )
        .then(function (response) {
          alert("success");
          // setIsSaving(false);
          // history.push('/user-list');
        })
        .catch(function (error) {
          alert("error");
          console.log("error ", error);
        });
    }

    //now clear input field
    auxNotes.noteText= "";
    auxNotes.timeStamp = "";
    auxNotes.date ="";
    setAuxNotes({...auxNotes,...auxNotes});
    //   console.log(userProfile);
  };
  //to fetch data from firebase store
  const isUserPresent = async () => {
    const snapshot = await firebase
      .firestore()
      .collection("todo-collection")
      .get();
    console.log("look up", snapshot.docs.map((doc) => doc)[1].id);
    // return snapshot.docs.map((doc) => doc);
    snapshot.docs.forEach(function (dox) {
      console.log("### ", dox.id + " data :", dox.data());
      if (dox.data().userId === userProfile.userId) {
        firestore
          .collection("todo-collection")
          .doc(dox.id)
          .update({
            notes: dataToPush.notes.concat([
              { noteText: "verdnkd", date: "43982" },
            ]),
          })
          .then(function () {
            console.log("Document successfully updated!");
          });
        // dox.data().notes.push();
      }
    });
    return true;
  };

  //function to check for new or older user
  const isOldUser = async () => {
    const snapshot = await firebase
      .firestore()
      .collection("todo-collection")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().userId == userProfile.userId) {
            userExitsAt.docId = doc.id;
            userExitsAt.flag = true;
            userExitsAt.oldNotes = doc.data().notes;
            setUserExistsAt({ ...userExitsAt, userExitsAt });
            console.log("check ",userExitsAt.oldNotes);
          }
          // console.log(`${doc.id} => ${doc.data().userId}`);
        });
      });
    console.log("doc id of exists user :" + userExitsAt.docId);
    console.log("user exists :" + userExitsAt.flag);
    // userExitsAt.oldNotes.map((note)=>{console.log(note)});
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("check ", user.uid);
      userProfile.userId = user.uid;
      setUserProfile({ ...userProfile, userProfile });
      //check if user is new or older one
      isOldUser();
      // isUserPresent();
    });
    // getMsg();
  }, [true]);
  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto" }}>
      <div>
        {/* for adding todos */}
        <Card style={{ padding: "10px" }}>
          <h2>Todo Home</h2>
          <Grid container justify="flex-start" spacing={2}>
            <Grid item xs="9" sm="6">
              <TextField
                id="noteText"
                label="User notes"
                variant="outlined"
                placeholder="Enter Notes"
                helperText="Please useful notes"
                error={false}
                // disabled={isSaving}
                required={true}
                fullWidth={true}
                value={userProfile.noteText}
                onChange={handleChange}
                rowsMax={5}
                rows={3}
                multiline={true}
              />
            </Grid>
            <Grid item xs="9" sm="3">
              <TextField
                id="date"
                // label="Note date"
                variant="outlined"
                placeholder="Enter date"
                helperText="Set date"
                error={false}
                // disabled={isSaving}
                required={true}
                fullWidth={true}
                value={userProfile.date}
                onChange={handleChange}
                type="date"
              />
            </Grid>
            <Grid item xs="9" sm="3">
              <TextField
                id="timeStamp"
                // label="Note date"
                variant="outlined"
                placeholder="Enter timeStamp"
                helperText="Set timeStamp"
                error={false}
                // disabled={isSaving}
                required={true}
                fullWidth={true}
                value={userProfile.timeStamp}
                onChange={handleChange}
                type="time"
              />
            </Grid>
          </Grid>
          <div style={{ textAlign: "right" }}>
            <Grid item xs="12" sm="12">
              <Button
                variant="contained"
                color="secondary"
                onClick={onSaveNote}
                //    disabled={isSaving}
                // onClick={runTimer}
              >
                Save Notes
              </Button>
            </Grid>
          </div>
        </Card>
      </div>
      {/* card of todos */}
      {/* <div>jkjasjf</div> */}
    </div>
  );
}
