import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4d7d8aPw8TreVdUfdM66R-JvibEAt0ks",
  authDomain: "gallamart2.firebaseapp.com",
  projectId: "gallamart2",
  storageBucket: "gallamart2.appspot.com",
  messagingSenderId: "849028329591",
  appId: "1:849028329591:web:1dc51473fd85b91ee21672",
  measurementId: "G-BCW5DS0MXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const collectionRef = db.collection('users');

const db = getFirestore(app);
const storage = getStorage(app);

export {db , storage};