import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    // appId: process.env.REACT_APP_APP_ID

    apiKey: "AIzaSyAEfvPoozH1Dr_KhFGyx22ZbUCGQgudD_o",
    authDomain: "milestone-f40ce.firebaseapp.com",
    databaseURL: "https://milestone-f40ce.firebaseio.com",
    projectId: "milestone-f40ce",
    storageBucket: "milestone-f40ce.appspot.com",
    messagingSenderId: "923884553918",
    appId: "1:923884553918:web:22c13b3070b7f67c3480ef"
  };
  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;
  export const authService = firebase.auth();
  export const dbService = firebase.firestore();