import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAV5-cCfX6W8muQX6kpybvd1U3fAnljiT4",
  authDomain: "pollar-14859.firebaseapp.com",
  databaseURL: "https://pollar-14859.firebaseio.com",
  projectId: "pollar-14859",
  storageBucket: "pollar-14859.appspot.com",
  messagingSenderId: "662829354147"
};
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();;
export default firebase;
