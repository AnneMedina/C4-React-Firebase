import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyD_uXh8KfNe11S8qhfQuB_RAzIHrKFTOHE",
//   authDomain: "react-notes-7a013.firebaseapp.com",
//   projectId: "react-notes-7a013",
//   storageBucket: "react-notes-7a013.appspot.com",
//   messagingSenderId: "370854322953",
//   appId: "1:370854322953:web:3e20fb09a3b7f61fc329d8"
// };

const firebaseConfig = {
  apiKey: "AIzaSyATodcAc4v8KsJYyyEBL2VZRM6WvL1GGTA",
  authDomain: "reactfirebase-8c57b.firebaseapp.com",
  projectId: "reactfirebase-8c57b",
  storageBucket: "reactfirebase-8c57b.firebasestorage.app",
  messagingSenderId: "848530666005",
  appId: "1:848530666005:web:105b0a01b0f755c991141c",
  measurementId: "G-E0JGK6SP8L"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
