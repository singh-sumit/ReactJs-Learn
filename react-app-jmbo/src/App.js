import logo from "./logo.svg";
import "./App.css";
import RouteApp from "./router.js";
import firebase from "firebase";
import { Component } from "react";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

export default class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.initFireBase();
  // }

  componentDidMount() {
    this.initFireBase();
  }

  initFireBase = () => {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // const firebaseConfig = {
    //   apiKey: "AIzaSyAeL_qdxbIKISsBTG-sBGc2-IaxjUyvZYY",
    //   authDomain: "user-feedback-4b53c.firebaseapp.com",
    //   projectId: "user-feedback-4b53c",
    //   storageBucket: "user-feedback-4b53c.appspot.com",
    //   messagingSenderId: "688740742805",
    //   appId: "1:688740742805:web:6d1b984d1f1e932944cd9c",
    //   measurementId: "G-J7RQNV17BP",
    // };
    const firebaseConfig = {
      apiKey: "AIzaSyCReYY4wCnFHhS8nny-TEHUixYdvzy_fGg",
      authDomain: "user-feedback-9d4c0.firebaseapp.com",
      projectId: "user-feedback-9d4c0",
      storageBucket: "user-feedback-9d4c0.appspot.com",
      messagingSenderId: "897551781751",
      appId: "1:897551781751:web:f7b59931e5b3118c215b72",
      measurementId: "G-KMVETYZ9ZC",
    };
    firebase.initializeApp(firebaseConfig);
  };
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <RouteApp />
        </ThemeProvider>
      </div>
    );
  }
}
