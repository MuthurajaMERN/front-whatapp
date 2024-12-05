// Import the necessary functions from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoCNzZcJVj1K2ZjbtAC1ouUSvMGx2fYZQ",
  authDomain: "whatapp-clone-2d0ac.firebaseapp.com",
  projectId: "whatapp-clone-2d0ac",
  storageBucket: "whatapp-clone-2d0ac.firebasestorage.app",
  messagingSenderId: "905154187877",
  appId: "1:905154187877:web:da6a41362c629b19d16c8c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
