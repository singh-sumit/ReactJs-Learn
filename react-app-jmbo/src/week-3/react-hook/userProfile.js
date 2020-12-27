import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, TextField } from "@material-ui/core";

export default function UserProfile() {
  //declare state for profile and setter function
  const [userProfile, setUserProfile] = useState({ name: "", email: "" ,address: ""});

  //to change profile
  function handleChange(event) {
    var eId = event.target.id;
    userProfile[event.target.id] = [event.target.value];
    console.log(userProfile);
    // setUserProfile(userProfile);
    // console.log(event.target.value);
    setUserProfile({...userProfile, userProfile });
  }
  return (
    <div>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs="12" sm="4">
          <TextField
            id="outlined-basic"
            id="name"
            label="Username"
            variant="outlined"
            placeholder="Enter Name"
            helperText="Please enter valid name"
            error={false}
            disabled={false}
            required={true}
            fullWidth={true}
            value={userProfile.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs="12" sm="4">
          <TextField
            id="outlined-basic"
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter email"
            helperText="Please enter valid email"
            error={false}
            disabled={false}
            required={true}
            fullWidth={true}
            value={userProfile.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs="12" sm="4">
          <TextField
            id="outlined-basic"
            id="address"
            label="Address"
            variant="outlined"
            placeholder="Enter Address"
            helperText="Please enter valid address"
            error={false}
            disabled={false}
            required={true}
            fullWidth={true}
            value={userProfile.address}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Card>
          <Grid container spacing={2}>
              <Grid item xs="6" sm="6">Name :</Grid>
              <Grid item xs="6" sm="6">{userProfile.name}</Grid>
          </Grid>
          <Grid container spacing={2}>
              <Grid item xs="6" sm="6">Address :</Grid>
              <Grid item xs="6" sm="6">{userProfile.address}</Grid>
          </Grid>
          <Grid container spacing={2}>
                <Grid item xs="6" sm="6">Email :</Grid>
                <Grid item xs="6" sm="6">{userProfile.email}</Grid>
          </Grid>
      </Card>
      {/* <p>{userProfile.name}</p>
      <p>{userProfile.email}</p> */}
    </div>
  );
}
