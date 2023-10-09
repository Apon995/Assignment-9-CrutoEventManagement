import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDpR5PgwHmlwl26t0dldV6vjKm0yF8QnIs",
    authDomain: "cruto-event-manager.firebaseapp.com",
    projectId: "cruto-event-manager",
    storageBucket: "cruto-event-manager.appspot.com",
    messagingSenderId: "537040719480",
    appId: "1:537040719480:web:ce8f4f2d2be3a8e47a278d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;