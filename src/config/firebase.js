import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAZmEjiF_Bq4ZZuL08LJB8gBhq8ywiMTdw",
  authDomain: "play-ground-react.firebaseapp.com",
  databaseURL: "https://play-ground-react-default-rtdb.firebaseio.com",
  projectId: "play-ground-react",
  storageBucket: "play-ground-react.appspot.com",
  messagingSenderId: "401637466077",
  appId: "1:401637466077:web:6abb275d85ae9ab4f9a034",
  measurementId: "G-PS3FE1T7B9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
