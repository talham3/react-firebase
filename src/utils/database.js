import { getDatabase } from "firebase/database";
import firebaseConfig from "config/firebase";

export const dbRef = getDatabase(firebaseConfig);
