import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfdIIaMOJOvIMOuI5YSc2KOgqDFYmL-V4",
  authDomain: "forc-b08a0.firebaseapp.com",
  projectId: "forc-b08a0",
  storageBucket: "forc-b08a0.appspot.com",
  messagingSenderId: "530325834967",
  appId: "1:530325834967:web:2fedc31a4f88e2ea9ef492",
};
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getFirestore(app);
