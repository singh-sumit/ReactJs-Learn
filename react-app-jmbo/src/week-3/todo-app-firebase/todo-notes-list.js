import {
  Card,
  CardContent,
  Grid,
  CardHeader,
  Typography,
  Avatar,
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useHistory, useParams } from "react-router-dom";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

export default function TodoNotesList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [docId, setDocId] = useState("");
  const [delOpener, setDelOpener] = useState(false);
  const [toDelText, setToDelText] = useState();
  let history = useHistory();
  const [requiredDoc, setRequiredDoc] = useState();
  const [userId, setUserId] = useState();
  let params = useParams();

  //handle on clicking delete button
  const handleOnDelete = (element) => {
    setToDelText(element);
    // console.log(toDelText);
    setDelOpener(true);
  };
  const handleClose = () => {
    setDelOpener(false);
  };
  const onAgreeDel = () => {
    setIsLoading(true);
    console.log(toDelText);
    // console.log('doc id',docId);
    //update older note without note with toDelText
    let newData = [];
    data.map((note) => {
      if (note === toDelText) {
        console.log("found=>", note);
      } else {
        console.log("not found =>", note);
        newData.push(note);
      }
    });
    console.log("new data :", newData);

    //update new note to document for that userId
    updateNoteToFireStore(newData);
  };
  const updateNoteToFireStore = async (dataAfterDel) => {
    console.log("what ", dataAfterDel);
    await firebase
      .firestore()
      .collection("todo-collection")
      .doc(docId)
      .update({ notes: dataAfterDel })
      .then((response) => {
        // alert("Document successfully deleted!");
        setIsLoading(false);
        handleClose();
      })
      .catch((error) => {
        alert("Error occured while deleting");
      });
  };
  const getUserDataFromFirebase = async () => {
    await firebase
      .firestore()
      .collection("todo-collection")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().userId == params.id) {
            // console.log("found :");
            // doc.data().notes.forEach((item) => {
            //   // console.log(item);
            // });
            setDocId(doc.id);
            let someData = [];
            someData = doc.data().notes;
            setData(someData);
            setIsLoading(false);
            // data = doc.data().notes;
            // setData([...data, ...data]);
            // console.log(data);
          }
          // console.log(`${doc.id}=>${doc.data().notes}`);
        });
      });
  };
  useEffect(() => {
    let id = params.id;
    setUserId(id);
    getUserDataFromFirebase();
    // console.log("check ", data);
  }, [isLoading]);

  useEffect(() => {}, [isLoading]);

  return (
    <div style={{ margin: "10px 30px" }}>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/todo-home")}
          startIcon={<NoteAddIcon />}
        >
          Add more Notes
        </Button>
      </div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs="6" sm="4">
              {/* <a target="_blank" href={item.url} style={{textDecoration: 'none'}}> */}
              <Card>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  // title={item.title}
                  subheader={
                    "Date :" +
                    new Date(item.date).toLocaleDateString() +
                    "\nTime :" +
                    item.time
                  }
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.noteText}
                    {/* {item.description} */}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ backgroundColor: "crimson", color: "white" }}
                  onClick={() => handleOnDelete(item)}
                >
                  Delete
                </Button>
                <Dialog
                  open={delOpener}
                  // onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      You Will not get back note again?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Disagree
                    </Button>
                    <Button
                      onClick={onAgreeDel}
                      // onClick={handleClose}
                      color="primary"
                      autoFocus
                    >
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
              </Card>
              {/* </a> */}
            </Grid>
          ))}

          {/* ))} */}
        </Grid>
      )}
    </div>
  );
}
