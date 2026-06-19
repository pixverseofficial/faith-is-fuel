import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc,
query,
where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyDjPJbcZ1XrZvd0WB7XPDnFEGu9cIfN_1k",
authDomain: "faith-is-fuel.firebaseapp.com",
projectId: "faith-is-fuel",
storageBucket: "faith-is-fuel.firebasestorage.app",
messagingSenderId: "710775780373",
appId: "1:710775780373:web:4443f05813f6dd6caf0a1c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
db,
collection,
addDoc,
getDocs,
deleteDoc,
doc,
query,
where
};
