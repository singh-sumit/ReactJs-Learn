import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { loginWithSocialAccount ,signup,signin} from "./loginManager";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginWithGoogle: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "crimson",
    color: "#fff",
  },
}));

export default function LogIn() {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(false);
const [email, setEmail]= useState('');
const [password, setPassword]= useState('');
let history = useHistory();

const handleChange=(event)=>{
    if(event.target.id === 'email'){
        setEmail(event.target.value);
    }else{
        setPassword(event.target.value);
    }
}

const onRegisterUser=()=>{
    setIsLogin(true);
    if(email!="" && password !=""){
        signup(email,password).then(function(response){
            console.log('sign up response',response);
            setIsLogin(false);
        }).catch(function(err){
            setIsLogin(false);
            console.log('sign up err ',err);
            
        })
    }
}

const onSignIn=()=>{
    setIsLogin(true);
    if(email!="" && password !=""){
        signin(email,password).then(function(response){
            console.log('sign in response',response);
            setIsLogin(false);
            history.push('/chat');
        }).catch(function(err){
            setIsLogin(false);
            console.log('sign in err ',err);
        })
    }
}
  const loginWithGoogle = () => {
    setIsLogin(true);
    loginWithSocialAccount("google")
      .then(function (response) {
        console.log(response);
        setIsLogin(false);
        history.push('/chat');
      })
      .catch(function (err) {
        setIsLogin(false);
        console.log("error ", err);
      });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            onClick={onSignIn}
            disabled={isLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={onRegisterUser}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
        <div>
          <Typography component="h5" variant="h5">
            Social Login
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={loginWithGoogle}
            className={classes.loginWithGoogle}
            disabled={isLogin}
          >
            {isLogin ? "Please Wait" : "Login with Google"}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
