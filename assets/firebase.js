import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfnUSs5944iJJ7f-jPgpQ7DC6q1uN5CvU",
  authDomain: "nsn-search-d578c.firebaseapp.com",
  databaseURL: "https://nsn-search-d578c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nsn-search-d578c",
  storageBucket: "nsn-search-d578c.firebasestorage.app",
  messagingSenderId: "22061781213",
  appId: "1:22061781213:web:314bc177f8c41566254b34"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
