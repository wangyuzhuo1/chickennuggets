var firebaseConfig = {
    apiKey: "AIzaSyDHs7DX1dJkNWdxnFRXnYjdiyIjWWdqZy0",
    authDomain: "letschat-4b0bf.firebaseapp.com",
    databaseURL: "https://letschat-4b0bf-default-rtdb.firebaseio.com",
    projectId: "letschat-4b0bf",
    storageBucket: "letschat-4b0bf.appspot.com",
    messagingSenderId: "589647215821",
    appId: "1:589647215821:web:4c449f8b8da458d7783d84"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser(){
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name)
    window.location="kwitter_room.html";
}
