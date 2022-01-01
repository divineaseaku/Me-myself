
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

//Variable to access database collection
const database = firestore.collection("formData")

//Get Submit Form
let submitForm = document.getElementById('submit');
//fucntion for document.getElementById
function getInputVal(id) {
    return document.getElementById(id);
}

//Create Event Listener To Allow Form Submission
// the code for submission is put in the event listener
submitForm.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //get values
  let childsName = getInputVal('childs-name').value
  let parentsName = getInputVal('parents-name').value
  let childsAge = getInputVal('childs-age').value
  let parentsEmail = getInputVal('parents-email').value
  let phone = getInputVal('phone').value
  let address = getInputVal('address').value
  let moreInfo = getInputVal('more-info').value

  //Save Form Data To Firebase
    database.doc(childsName).set({
       childsName: childsName,
        parentsName: parentsName,
        childsAge: childsAge,
        parentsEmail: parentsEmail,
        phone: phone,
        address: address,
        moreInfo: moreInfo
    })
    .then(function() {
        console.log("Document successfully written!");
        alert("Form submitted successfully ");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    //Clear Form
    document.getElementById('reg-form').reset();
});







