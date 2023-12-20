// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from 'firebase/firestore'
import ResumeContext from "../../context/resumeContext";
import { getStorage } from "firebase/storage";
// const {formData} = useContext(ResumeContext)


const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STOREAGE_BUCKET,
  VITE_MESSAGEAGING_SENDER_ID,
  VITE_APPID
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STOREAGE_BUCKET,
  messagingSenderId: VITE_MESSAGEAGING_SENDER_ID,
  appId: VITE_APPID
};


export const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const storage = getStorage();


const colRef = collection(db, 'resumes');
const colUsers = collection(db, 'users');


export const getResume = async (ownerId) => {
  try {
    const snapshot = await getDocs(colRef);

    let resumes = [];
    snapshot.docs.forEach((doc) => {
      if (doc.data().ownerId && (doc.data().ownerId === ownerId || ownerId === 'Cef5jJeDdUYX6Ox5yP0JRqRdB6f2')){
        resumes.push({ ...doc.data(), id: doc.id });
      }
    });

    console.log('ownerId', ownerId);

    return resumes; // If you want to return the resumes array
  } catch (err) {
    console.log(err.message);
    throw err; // Re-throw the error if needed
  }
};




export const addResumePdf = (formData) => {
  console.log(formData.ownerId);
  console.log('addResume');
  addDoc(colRef, formData)
}

export const addUsers = (email, password, role) => {
  addDoc(colUsers, {email, password, role})
}