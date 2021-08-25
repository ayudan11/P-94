var firebaseConfig = {
      apiKey: "AIzaSyCHmEnuAbaGmv_Z42jH9BkG5L4JucwpKa4",
      authDomain: "lets-chat-web-app-f8d98.firebaseapp.com",
      projectId: "lets-chat-web-app-f8d98",
      storageBucket: "lets-chat-web-app-f8d98.appspot.com",
      messagingSenderId: "305048089604",
      appId: "1:305048089604:web:c5ff83e57b9d2d81663151",
      measurementId: "G-DB7BP75S11"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
