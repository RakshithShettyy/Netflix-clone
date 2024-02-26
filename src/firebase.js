import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_V6xe7z-w0YhoiK6I3BBy8B4VwLIyta8",
  authDomain: "netflix-clone-9f6d2.firebaseapp.com",
  projectId: "netflix-clone-9f6d2",
  storageBucket: "netflix-clone-9f6d2.appspot.com",
  messagingSenderId: "460052806507",
  appId: "1:460052806507:web:af2c73f1016fac7f05ea2e",
};

// Rename this to firebaseApp or any other name that is not 'firebase'
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
