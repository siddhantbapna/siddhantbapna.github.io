const firebaseConfig = {
    apiKey: "AIzaSyDz6kj_Ier9puhWHc9fT9RrBqVL0nora1g",
    authDomain: "userji.firebaseapp.com",
    projectId: "userji",
    storageBucket: "userji.appspot.com",
    messagingSenderId: "434126434890",
    appId: "1:434126434890:web:19f2520c0b3a412bbd6cb3"
};

firebase.initializeApp(firebaseConfig);

function writeUserData(username) {
    firebase.database().ref('users/'+username+"/coins").set(100);
}

writeUserData("heaaai")




/*
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
    firebase.auth().createUserWithEmailAndPassword("email@email.com", "password")
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    var uid = user.uid;
    console.log(uid)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  }
});

*/