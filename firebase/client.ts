import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_48hEy1qAsudI6kto7V2Bf3MKfLi2dvE",
  authDomain: "ai-interview-a3cfc.firebaseapp.com",
  projectId: "ai-interview-a3cfc",
  storageBucket: "ai-interview-a3cfc.firebasestorage.app",
  messagingSenderId: "444452239533",
  appId: "1:444452239533:web:c3540724dd39cbdf506e24",
  measurementId: "G-ZVS01J8HXP",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
