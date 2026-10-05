import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    auth
} from "./firebase.js";


const loginForm =
    document.getElementById("loginForm");

const message =
    document.getElementById("message");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById("username")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("password")
                    .value;


            try {

                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );


                window.location.href =
                    "dashboard.html";


            } catch (error) {

                console.error(error);

                message.textContent =
                    "❌ البريد الإلكتروني أو كلمة المرور غير صحيحة";

                message.style.color =
                    "red";

            }

        }
    );

}