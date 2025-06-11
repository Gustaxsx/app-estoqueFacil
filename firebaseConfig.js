// firebaseConfig.js (este arquivo estará na raiz do seu projeto)

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Importe outros serviços do Firebase que você usará (Firestore, etc.)
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-gb6WNxu7_stWtEmKPEcO17jr_h3C1cM",
    authDomain: "estoquefacil-7b03b.firebaseapp.com",
    projectId: "estoquefacil-7b03b",
    storageBucket: "estoquefacil-7b03b.firebasestorage.app",
    messagingSenderId: "201462826581",
    appId: "1:201462826581:web:15338a4800124bdccfb6dc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app); // Descomente se for usar Firestore