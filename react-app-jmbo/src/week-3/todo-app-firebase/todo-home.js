import { Button, Card, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function TodoHome() {
    // state var
    const [userProfile,setUserProfile]=useState({
        notes : "",
        time : "",
        date : ""
    });
    //to handle input value
   const handleChange=(event)=>{
    userProfile[event.target.id] = event.target.value;
        // userProfile.event.target.id = event.target.value;
        setUserProfile({...userProfile,userProfile});
        console.log('saved ',userProfile);
    }
  return (
    <div style={{maxWidth: '1000px', margin: '50px auto'}}>
      <div >
        {/* for adding todos */}
        <Card style={{padding : '10px'}}>
          <h2>Todo Home</h2>
          <Grid container justify="flex-start" spacing={2}>
            <Grid item xs="9" sm="6">
              <TextField
                id="notes"
                label="User notes"
                variant="outlined"
                placeholder="Enter Notes"
                helperText="Please useful notes"
                error={false}
                // disabled={isSaving}
                required={true}
                fullWidth={true}
                value={userProfile.notes}
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
                id="time"
                // label="Note date"
                variant="outlined"
                placeholder="Enter time"
                helperText="Set time"
                error={false}
                // disabled={isSaving}
                required={true}
                fullWidth={true}
                value={userProfile.time}
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
                //    onClick={handleSaveData}
                //    disabled={isSaving}
                //onClick={runTimer}
              >
                Save Notes
              </Button>
            </Grid>
          </div>
        </Card>
      </div>
      {/* card of todos */}
      <div>jkjasjf</div>
    </div>
  );
}
