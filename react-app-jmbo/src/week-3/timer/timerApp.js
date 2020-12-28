import { Button, Card, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export default function TimerApp() {
  let [time, setTime] = useState(5);
  const [timer, setTimer] = useState();
  const [isAlert, setIsAlert] = useState(false);
  let [auxCount, setAuxCount] = useState(0);

  function handleChange(event) {
    setTime(event.target.value);
    console.log("time :" + time);
  }
  function runTimer() {
    /*******************
     * method -1
     */
    // setTimeout(function(){
    //   console.log(i);
    //   i--;
    //   alert('hello');
    // },time*1000);

    /***********
     * method -2
     */
    setTimer(
      setInterval(function () {
        if (time == auxCount) {
          alert("time out");
          setIsAlert(!isAlert);
          setAuxCount(0);
          setTime(0);
        } else {
          // setTime(time--);
          setAuxCount(auxCount++);
          console.log("new time :" + time);
        }
      }, 1000)
    );
  }

  useEffect(() => {
    clearInterval(timer);
    console.log("called");
  }, [isAlert]);

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>This is Timer App.</h1>
      <Grid container justify="flex-start" spacing={2}>
        <Grid item xs="9" sm="9">
          <TextField
            id="time"
            onChange={handleChange}
            value={time}
            label="Please Select Your Time"
            helperText="Set timer in the basis of seconds"
            fullWidth={true}
            type="number"
            variant="filled"
          />
        </Grid>
        <Grid item xs="3" sm="3">
          <Button onClick={runTimer}>Start Timer</Button>
        </Grid>
      </Grid>
      <div>
        <Card>
          <h2>{auxCount}</h2>
        </Card>
      </div>
    </div>
  );
}
