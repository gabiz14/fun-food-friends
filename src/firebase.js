import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyATs_Dncfe90yAoXixyrn_EpSg1DypoL2g",
    authDomain: "fun-food-friends-2174c.firebaseapp.com",
    databaseURL: "https://fun-food-friends-2174c.firebaseio.com",
    projectId: "fun-food-friends-2174c",
    storageBucket: "",
    messagingSenderId: "70226031552",
    appId: "1:70226031552:web:0460665818fe3f49"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
  export default firebase;