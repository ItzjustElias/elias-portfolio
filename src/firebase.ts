import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCzTpeuTLKxJ_GPJdm87RyTlpdIWvwAKUo",
  authDomain: "adminpaneleliaswebsite.firebaseapp.com",
  projectId: "adminpaneleliaswebsite",
  storageBucket: "adminpaneleliaswebsite.firebasestorage.app",
  messagingSenderId: "727180904310",
  appId: "1:727180904310:web:152885e255d0ce2c9e1c57",
  measurementId: "G-RDG318KTT7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;
