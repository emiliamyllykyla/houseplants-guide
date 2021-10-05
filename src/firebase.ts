import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnOCErX_42qR1r96ckHJD02U87nHkZ63E",
  authDomain: "houseplants-489e7.firebaseapp.com",
  projectId: "houseplants-489e7",
  storageBucket: "houseplants-489e7.appspot.com",
  messagingSenderId: "676603986557",
  appId: "1:676603986557:web:c7b431aaf50989a82ba714",
};

firebase.initializeApp(firebaseConfig);

export const houseplants = firebase.firestore().collection("houseplants");

export default firebase