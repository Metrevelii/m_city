import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import { cityDb } from "./temp/m-city-export";

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

const DB = firebase.firestore();
const matchesCollection = DB.collection("matches");
const playersCollection = DB.collection("players");
const positionsCollection = DB.collection("positions");
const promotionsCollection = DB.collection("promotions");
const teamsCollection = DB.collection("teams");

// cityDb.matches.forEach((item) => {
//   matchesCollection.add(item);
// });
// cityDb.players.forEach((item) => {
//   playersCollection.add(item);
// });
// cityDb.positions.forEach((item) => {
//   positionsCollection.add(item);
// });
// cityDb.promotions.forEach((item) => {
//   promotionsCollection.add(item);
// });
// cityDb.teams.forEach((item) => {
//   teamsCollection.add(item);
// });

export { firebase, matchesCollection, playersCollection, positionsCollection, promotionsCollection, teamsCollection };
