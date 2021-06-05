import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPVRrCvaVVYtLTO3neNotroSuyVveAJeA",
    authDomain: "react-connected-5bc99.firebaseapp.com",
    projectId: "react-connected-5bc99",
    storageBucket: "react-connected-5bc99.appspot.com",
    messagingSenderId: "157647687497",
    appId: "1:157647687497:web:a97991fbc5e5469905d498"
};

firebase.initializeApp(config);

// TODO: set up a provider ...Google, Facebook, Github
const googleProvider = new firebase.auth.GoogleAuthProvider();

// TODO: Set up auth functions
function login() {
    firebase.auth().signInWithPopup(googleProvider);
}

function logout() {
    firebase.auth().signOut();
}

// TODO: Export auth functions
export {
    login,
    logout
}