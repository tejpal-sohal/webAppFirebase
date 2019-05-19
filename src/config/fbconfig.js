import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var config = {
    apiKey: "AIzaSyDgDboMCwOgWX4AZnp5JNHu59NvKNJBWu8",
    authDomain: "mario-plan-6932e.firebaseapp.com",
    databaseURL: "https://mario-plan-6932e.firebaseio.com",
    projectId: "mario-plan-6932e",
    storageBucket: "mario-plan-6932e.appspot.com",
    messagingSenderId: "374337343504",
    appId: "1:374337343504:web:c7a03658c3358c2d"
  };
  // Initialize Firebase

  firebase.initializeApp(config);
  firebase.firestore().settings({}) //timestampsInSnapshots:true

  export default firebase;