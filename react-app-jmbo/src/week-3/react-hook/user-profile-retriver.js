import React, { useEffect, useState } from "react";
import firebase from "firebase";
import {
  Avatar,
  CircularProgress,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Button,
  Dialog,DialogActions,DialogTitle,
  DialogContentText,
  DialogContent
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";

export default function UserProfileList() {
  const [data, setData] = useState();
  const [isloading, setLoading] = useState(true);
  const [openDialog ,setOpenDialog] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState();
  const [reload, setReload]= useState(false);
  let history = useHistory();

  //to fetch data from firebase store
  const getUserListFromFireBase = async () => {
    const snapshot = await firebase
      .firestore()
      .collection("user-feedback")
      .get();
    console.log(snapshot.docs.map(doc => doc)[0].id);
    return snapshot.docs.map((doc) => doc);
  };

  useEffect(() => {
    getUserListFromFireBase().then(function (data) {
      setData(data);
      setLoading(false);
      console.log(data);
    });
  }, [reload]);

  const handleClose=()=>{
      setOpenDialog(false);
  }

  const handleAgree =()=>{
      onDeleteItem();
  }
  const onDeleteItem=()=>{
      const firestore = firebase.firestore();
      firestore.collection('user-feedback').doc("/"+selectedDoc).delete().then(function(){
        console.log('Document successfully deleted!');
        setReload(!reload);
        setLoading(true);
      }).catch(function(error){
          console.log('Error removing document :',error);
      });
      setOpenDialog(false);
  }

  const onSelectDocForDelete=(id)=>{
      console.log('selected '+id);
    setSelectedDoc(id);
    setOpenDialog(true);
  }
  
  return (
    <div>
        <div>
         <Button onClick={()=>history.push('/user-profile/add')} color="primary" variant="contained">Add More FeedBack</Button>   
        </div>
      {isloading ? (
        <CircularProgress />
      ) : (
        <List>
          {data.map((item) => {
            return (
              <div>
                <ListItem onClick={()=> history.push('/user-profile/'+item.id)}>
                  <ListItemText
                    primary={item.data().name[0]}
                    secondary={item.data().email[0]}
                  />
                  <ListItemText
                    primary={item.data().address[0]}
                    secondary={item.data().phone[0]}
                  />
                  <ListItemText
                    primary={item.data().bio[0]}
                    secondary={item.data().occupation[0]}
                  />
                   <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="comments"></IconButton>
                  <DeleteIcon onClick={()=>onSelectDocForDelete(item.id)}/>
                </ListItemSecondaryAction>
                </ListItem> 
                <Divider />
              </div>
            );
          })}
        </List>
      )}
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to delete?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You cannot undo this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
