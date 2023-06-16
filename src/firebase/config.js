import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBzKPArQk0LNPrFMToK7tOh1sJLmvO5PBs",
  authDomain: "cooking-chronicles-site.firebaseapp.com",
  projectId: "cooking-chronicles-site",
  storageBucket: "cooking-chronicles-site.appspot.com",
  messagingSenderId: "982695411675",
  appId: "1:982695411675:web:f85c7b8775595feef131fe"
}

//init fireebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }