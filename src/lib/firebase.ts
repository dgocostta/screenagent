import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAB6ZHJtmXBVRNfhHmXIt8lZT-wy3jS9I",
  authDomain: "screenagent-8bfe0.firebaseapp.com",
  projectId: "screenagent-8bfe0",
  storageBucket: "screenagent-8bfe0.firebasestorage.app",
  messagingSenderId: "895425088288",
  appId: "1:895425088288:web:eaa33420d4ff2bc03de545",
  measurementId: "G-1G6NVVBVN6"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;