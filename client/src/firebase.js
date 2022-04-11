import * as firebase from "firebase";
// firebase 7
const firebaseConfig = {
  apiKey: "AIzaSyAC6zufd0CP03YXfw7SokG7wtQ-2p_6aBc",
  authDomain: "ecommerce-mern-ea481.firebaseapp.com",
  projectId: "ecommerce-mern-ea481",
  storageBucket: "ecommerce-mern-ea481.appspot.com",
  messagingSenderId: "894297961378",
  appId: "1:894297961378:web:c515d26e07873f9a38b8fb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
