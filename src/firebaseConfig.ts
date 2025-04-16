import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Optional if you want Analytics

// Your specific Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdI3Wa7Ap8SOse83Pht9f2YAFksyHM4oo",
    authDomain: "finanzaspersonales-6c62be72.firebaseapp.com",
    projectId: "finanzaspersonales-6c62be72",
    storageBucket: "finanzaspersonales-6c62be72.firebasestorage.app",
    messagingSenderId: "82342736652",
    appId: "1:82342736652:web:3662cad181cfd349424f29"
    // measurementId: "YOUR_MEASUREMENT_ID" // Add if you have one and want Analytics
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
// const analytics = getAnalytics(app); // Optional

// Export the services for use in other components
export { app, auth, db };