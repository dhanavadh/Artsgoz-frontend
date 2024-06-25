import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBad92g-L1d9958gsB9nprtrUij9IQA1Wg",
    authDomain: "ids-artsgoz.firebaseapp.com",
    projectId: "ids-artsgoz",
    storageBucket: "ids-artsgoz.appspot.com",
    messagingSenderId: "386453883319",
    appId: "1:386453883319:web:27feb153b76a84658b8032",
    measurementId: "G-2S4TQCKHMG"
  };

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}