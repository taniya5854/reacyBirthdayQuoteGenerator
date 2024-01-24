// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth} from "firebase/auth";
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPQdCMIRT9KosVygLiL7E5kkUpR4msVQE",
  authDomain: "birthdaywit-3e56a.firebaseapp.com",
  databaseURL: "https://birthdaywit-3e56a-default-rtdb.firebaseio.com",
  projectId: "birthdaywit-3e56a",
  storageBucket: "birthdaywit-3e56a.appspot.com",
  messagingSenderId: "644766201872",
  appId: "1:644766201872:web:74dcc99c75af22c3577295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);


export {db, auth};