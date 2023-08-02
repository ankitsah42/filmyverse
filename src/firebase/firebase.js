
import { initializeApp } from "firebase/app";
import {getFirestore ,collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2NMhrSWbBlm5xD1cJSF46gOcDYoRi3bU",
  authDomain: "filmyverse-b8ffc.firebaseapp.com",
  projectId: "filmyverse-b8ffc",
  storageBucket: "filmyverse-b8ffc.appspot.com",
  messagingSenderId: "1012793432441",
  appId: "1:1012793432441:web:79c90a9523aeea89b1b7a8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;

