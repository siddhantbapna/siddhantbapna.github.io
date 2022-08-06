
const firebaseConfig = {
  apiKey: "AIzaSyDz6kj_Ier9puhWHc9fT9RrBqVL0nora1g",
  authDomain: "userji.firebaseapp.com",
  projectId: "userji",
  storageBucket: "userji.appspot.com",
  messagingSenderId: "434126434890",
  appId: "1:434126434890:web:19f2520c0b3a412bbd6cb3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function register(email,password,username){
    auth.createUserWithEmailAndPassword(email,password)
    .then(() => {
        var user = auth.currentUser
        var databaseRef = database.ref()
        var userData = {
            email : email,
            username : username
        }
        databaseRef.childu("users/"+user.uid).set(userData)
    })
    .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        alert(errorMessage)
    })
}
