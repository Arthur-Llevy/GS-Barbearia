import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId:  process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const firebaseVariables = {
  app, 
  auth,
  provider
};
const loginWithGoogle = async () => {
  signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result._tokenResponse.email);
        console.log(result._tokenResponse);
    }).catch(() => {
        alert('Falha ao fazer login com uma conta Google. Tente novamente mais tarde.');
    }); 
};