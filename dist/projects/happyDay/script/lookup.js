
const firebaseConfig = {
  apiKey: "AIzaSyAUcYZ53X0d61hTVItmngO923FBU4Y_RPg",
  authDomain: "happydaycare-fb76f.firebaseapp.com",
  projectId: "happydaycare-fb76f",
  storageBucket: "happydaycare-fb76f.appspot.com",
  messagingSenderId: "920814817548",
  appId: "1:920814817548:web:819eb2d634dfee8b40f929",
  measurementId: "G-507JMDMK6Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore()


//Get Data From Firebase

//function for document.getElementById
function getInputVal(id) {
  return document.getElementById(id);
}


        
        // client.data() is never undefined for query doc snapshots
        // console.log(client.id, " => ", output.phone);
       // console.log(client.id, " => ", output);
        //const output = JSON.parse(client.data());
        //console.log( output.parentsEmail);

        //add event listener to search button
    document.querySelector(".lookup").addEventListener("click", function(e) {
          e.preventDefault();   
          //get the value of the input
          var searchName = getInputVal("lookup-name").value.trim();
          //check if the input is not empty
          if (searchName != "") {
            //get the data from firebase
          var docRef = firestore.collection("formData").doc(searchName).get()
          docRef.then((doc) => {
                if (doc.exists) {
                     console.log("Document data:", doc.data());

                   const output = doc.data();
                  console.log(output.phone);
            //display the data in the html
            getInputVal("info-area").style.display = "block";
            getInputVal("display-info").innerHTML = `
            <p>Name: ${output.childsName}</p>
            <p>Age: ${output.childsAge}</p> 
            <p>Parents Name: ${output.parentsName}</p>
            <p>Parents Email: ${output.parentsEmail}</p>
            <p>Parents Phone: ${output.phone}</p>
            <p>Address: ${output.address}</p>
            `

            //clear input
            getInputVal("lookup-name").value = "";
          }
          else {
            alert ("User not found!");
            console.log("No such document!");
            //clear input
            getInputVal("lookup-name").value = "";
          } 
      });
          } else {
            alert("Please enter a name!");
          } 
});







      //get all users from  firebase
      // var dbValue = firestore.collection("formData").get()
// .then(function(querySnapshot) {
//     querySnapshot.forEach(function(client) {
// const output = client.data();
//)}
//)}
      

 
 
