import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Card, CircularProgress, TextField } from "@material-ui/core";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export default function UserProfile() {
  //declare state for profile and setter function
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    address: "",
    bio: "",
    phone: "",
    occupation: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  let history = useHistory();
  //to change profile
  function handleChange(event) {
    var eId = event.target.id;
    userProfile[event.target.id] = [event.target.value];
    console.log(userProfile);
    // setUserProfile(userProfile);
    // console.log(event.target.value);
    setUserProfile({ ...userProfile, userProfile });
  }

  const handleSaveData = () => {
    const firestore = firebase.firestore();
    setIsSaving(true);

    firestore
      .collection("user-feedback")
      .add({
        name: userProfile.name,
        address: userProfile.address,
        email: userProfile.email,
        bio: userProfile.bio,
        phone: userProfile.phone,
        occupation: userProfile.occupation,
      })
      .then(function (response) {
        /* alert("success"); */
        setIsSaving(false);
        history.push('/user-list');
      })
      .catch(function (error) {
        alert("error");
        console.log('error ',error);
      });
    console.log(userProfile);
  };
  return (
    <div style={{ margin: "30px" }}>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs="12" sm="4" style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-basic"
            id="name"
            label="Username"
            variant="outlined"
            placeholder="Enter Name"
            helperText="Please enter valid name"
            error={false}
            disabled={isSaving}
            required={true}
            fullWidth={true}
            value={userProfile.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs="12" sm="4" style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-basic"
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter email"
            helperText="Please enter valid email"
            error={false}
            disabled={isSaving}
            required={true}
            fullWidth={true}
            value={userProfile.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs="12" sm="4" style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-basic"
            id="address"
            label="Address"
            variant="outlined"
            placeholder="Enter Address"
            helperText="Please enter valid address"
            error={false}
            disabled={isSaving}
            required={true}
            fullWidth={true}
            value={userProfile.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs="12" sm="6">
          <TextField
            id="outlined-basic"
            id="phone"
            label="Enter phone"
            variant="outlined"
            placeholder="Enter phone number"
            helperText="Please enter valid phone number"
            error={false}
            disabled={isSaving}
            required={true}
            fullWidth={true}
            value={userProfile.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs="12" sm="6">
          <TextField
            id="outlined-basic"
            id="occupation"
            label="Enter occupation"
            variant="outlined"
            placeholder="Enter occupation"
            helperText="Please enter valid occupation"
            error={false}
            disabled={isSaving}
            required={true}
            fullWidth={true}
            value={userProfile.occupation}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs="12" sm="12">
          <TextField
            id="outlined-basic"
            id="bio"
            label="User Bio"
            variant="outlined"
            placeholder="Enter Bio"
            helperText="Please enter valid Bio"
            error={false}
            disabled={isSaving}
            required={true}
            fullWidth={true}
            value={userProfile.bio}
            onChange={handleChange}
            rowsMax={5}
            rows={3}
            multiline={true}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "right" }}>
        {isSaving ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSaveData}
            disabled={isSaving}
          >
            Submit
          </Button>
        )}
      </div>
      <Card style={{ margin: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs="6" sm="6">
            Name :
          </Grid>
          <Grid item xs="6" sm="6">
            {userProfile.name}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs="6" sm="6">
            Address :
          </Grid>
          <Grid item xs="6" sm="6">
            {userProfile.address}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs="6" sm="6">
            Email :
          </Grid>
          <Grid item xs="6" sm="6">
            {userProfile.email}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs="6" sm="6">
            Phone no. :
          </Grid>
          <Grid item xs="6" sm="6">
            {userProfile.phone}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs="6" sm="6">
            Occupation :
          </Grid>
          <Grid item xs="6" sm="6">
            {userProfile.occupation}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs="6" sm="6">
            Bio :
          </Grid>
          <Grid item xs="6" sm="6">
            {userProfile.bio}
          </Grid>
        </Grid>
      </Card>
      {console.log(typeof userProfile.name)}
      {/* <p>{userProfile.name}</p>
      <p>{userProfile.email}</p> */}
    </div>
  );
}
