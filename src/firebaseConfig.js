import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAmZUcOI1COQfcWk6V7nBIs2bJGEu-3NuI",
  authDomain: "loginbasicdemo.firebaseapp.com",
  projectId: "loginbasicdemo",
  storageBucket: "loginbasicdemo.appspot.com",
  messagingSenderId: "688601187941",
  appId: "1:688601187941:web:4204635026bbeb87bea88c",
  measurementId: "G-RF1L0SMBND"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;