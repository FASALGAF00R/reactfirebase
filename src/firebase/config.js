import firebase from 'firebase/compat/app'; // Import 'app' from the compat version
import 'firebase/compat/firestore'; // Import 'firestore' from the compat version

const firebaseConfig = {
  apiKey: "AIzaSyASfjxM6fYVg0mvN_H0DaZjUJ2d7iHdhnM",
  authDomain: "fir-43d54.firebaseapp.com",
  projectId: "fir-43d54",
  storageBucket: "fir-43d54.appspot.com",
  messagingSenderId: "992515774739",
  appId: "1:992515774739:web:4a225ee19f7b2e586da2e6",
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export default app;

