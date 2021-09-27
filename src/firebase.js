import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBaHQXWxTQ2zbIdJwU8bKJcazM1rxHGtKU",
  authDomain: "react-calculator-5ace7.firebaseapp.com",
  projectId: "react-calculator-5ace7",
  storageBucket: "react-calculator-5ace7.appspot.com",
  messagingSenderId: "492858111140",
  appId: "1:492858111140:web:6c9129844d7c2268bf2231",
});

export const auth = app.auth();
export default app;




