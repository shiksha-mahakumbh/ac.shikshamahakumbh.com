// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { connectFirestoreEmulator } from "firebase/firestore";
import { connectStorageEmulator } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAndp1JEVJUZopO6of8n740QytKHqtonio",
  authDomain: "ac-rase.firebaseapp.com",
  projectId: "ac-rase",
  storageBucket: "ac-rase.appspot.com",
  messagingSenderId: "598135456676",
  appId: "1:598135456676:web:f7a581ee6fd8744849f731",
  measurementId: "G-YCV4XC3EEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage };
