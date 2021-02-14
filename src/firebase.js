import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/database"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDvlVdkdQ6NgfwPvgy9WWRKARJ0KGtPTP0",
  authDomain: "luxury-watch-c984d.firebaseapp.com",
  databaseURL: "https://luxury-watch-c984d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "luxury-watch-c984d",
  storageBucket: "luxury-watch-c984d.appspot.com",
  messagingSenderId: "652862856896",
  appId: "1:652862856896:web:c1981a3fc43f3d1c7b5725"
})

export const auth = app.auth()
export default app
export const storage = app.storage();
export const database = app.database();