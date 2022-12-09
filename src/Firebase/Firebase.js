import firebase from "firebase/compat/app"
import "firebase/compat/database"

const config = {
    apiKey: "AIzaSyBXceuzbAdH9hQTEpC8xfXzMGMcr7pQqmk",
    authDomain: "montakhab-33942.firebaseapp.com",
    databaseURL: "https://montakhab-33942-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "montakhab-33942",
    storageBucket: "montakhab-33942.appspot.com",
    messagingSenderId: "687803940106",
    appId: "1:687803940106:web:492855b525ae714f684ef3",
    measurementId: "G-0J6C0WEG45"
  };

  firebase.initializeApp(config);

    
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePlayers
}