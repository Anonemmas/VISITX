// This is the firebase config file

const config = {
    apiKey: "AIzaSyAiN0Srr_Z-opiFqm15xyeAQyBgWENahMQ",
    authDomain: "bag-locations-app.firebaseapp.com",
    projectId: "bag-locations-app",
    storageBucket: "bag-locations-app.appspot.com",
    messagingSenderId: "833793979231",
    appId: "1:833793979231:web:531009fbc795a4e0607cea"
}

const firebase = window.firebase.initializeApp(config); //initializing firebase in the app
const { FieldValue } = window.firebase.firestore; // fieldvalue is used to update the values in the firebase database(firestore)


export {firebase, FieldValue}

