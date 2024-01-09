import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ-DhYaftp-pC1H8PNHF1MPg7w1p-UC7w",
  authDomain: "mcity-27d0e.firebaseapp.com",
  projectId: "mcity-27d0e",
  storageBucket: "mcity-27d0e.appspot.com",
  messagingSenderId: "787361673347",
  appId: "1:787361673347:web:32a74794936c125a026bb6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
