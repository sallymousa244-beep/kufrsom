import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";


import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


const firebaseConfig = {

    apiKey:
        "AIzaSyATnmEdYSzUIidEXIdSEnXb2QAosqJSojk",

    authDomain:
        "school-late-app.firebaseapp.com",

    projectId:
        "school-late-app",

    storageBucket:
        "school-late-app.firebasestorage.app",

    messagingSenderId:
        "431589921658",

    appId:
        "1:431589921658:web:7f1a8a3f6ffabc15d07cc3",

    measurementId:
        "G-6TN7LMWPW3"
};


const app =
    initializeApp(firebaseConfig);


const db =
    getFirestore(app);


const auth =
    getAuth(app);


export {
    db,
    auth
};