import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Replace this with your own Firebase configuration
const firebaseConfig = {
  "Privado"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, serverTimestamp };
