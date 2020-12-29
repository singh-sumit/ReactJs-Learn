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
    const firebaseConfig = {
      apiKey: "AIzaSyAeL_qdxbIKISsBTG-sBGc2-IaxjUyvZYY",
      authDomain: "user-feedback-4b53c.firebaseapp.com",
      projectId: "user-feedback-4b53c",
      storageBucket: "user-feedback-4b53c.appspot.com",
      messagingSenderId: "688740742805",
      appId: "1:688740742805:web:6d1b984d1f1e932944cd9c",
      measurementId: "G-J7RQNV17BP",
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
