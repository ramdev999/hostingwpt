// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaA-lH-geMdHRXoMtcc7zKbDnYhDz7fbE',
  authDomain: 'purity-db.firebaseapp.com',
  projectId: 'purity-db',
  storageBucket: 'purity-db.appspot.com',
  messagingSenderId: '706165923314',
  appId: '1:706165923314:web:e65d038458559a71a79f6b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
