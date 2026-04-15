import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js';

// Trage hier deine Firebase-Daten aus der Firebase-Konsole ein.
const firebaseConfig = {
  apiKey: "AIzaSyAdAFZQD1D4tU7ugFj5kdWzQJJO40q7WXM",
  authDomain: "wahrscheinlichkeit-98b1e.firebaseapp.com",
  databaseURL: "https://wahrscheinlichkeit-98b1e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wahrscheinlichkeit-98b1e",
  storageBucket: "wahrscheinlichkeit-98b1e.firebasestorage.app",
  messagingSenderId: "68803371458",
  appId: "1:68803371458:web:b4ba604bcaae8dfc64765b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
