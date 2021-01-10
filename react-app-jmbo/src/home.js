import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import TodoLogIn from "./week-3/todo-app-firebase/todo-login";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  let history = useHistory();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                To do Project
              </Typography>
              <Typography variant="h5" component="h2">
                {/* be{bull}nev{bull}o{bull}lent */}
              </Typography>
              {/* <Typography color="textSecondary">adjective</Typography> */}
              <Typography variant="body2" component="p">
                Manage todo daily with an authentication.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary" variant="outlined" onClick={() => history.push("/todo-login")}>
                Visit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
