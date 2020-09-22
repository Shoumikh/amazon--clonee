//imported after npm i firebase
import firebase from "firebase";

//copied firebase webside inside settings > project settings > bottom of the page config
const firebaseConfig = {
  apiKey: "AIzaSyBqc5WYsAGN9srfZ5lzXvYzrIzyQRHln9A",
  authDomain: "clone-shoumikh.firebaseapp.com",
  databaseURL: "https://clone-shoumikh.firebaseio.com",
  projectId: "clone-shoumikh",
  storageBucket: "clone-shoumikh.appspot.com",
  messagingSenderId: "195420942354",
  appId: "1:195420942354:web:3df84a102bd17bee1a68cb",
  measurementId: "G-55CQ39DTC9"
};

//this will set up the app with firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize the database
const db = firebaseApp.firestore(); //firestore is the realtime db of firebase

//this gives us a variable to handle sign in and all that
const auth = firebase.auth();

export { db, auth };
