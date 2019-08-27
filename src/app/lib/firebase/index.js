import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBj9ZGKHjoif93eSPPnIy9R7nNvxYheHN8",
    authDomain: "wnd-io.firebaseapp.com",
    databaseURL: "https://wnd-io.firebaseio.com",
    projectId: "wnd-io",
    storageBucket: "wnd-io.appspot.com",
    messagingSenderId: "680439626861",
    appId: "1:680439626861:web:643b6bbd526e7822"
}

let firestore, storage, timestamp

if (!firebase.apps.length) {
    firebase.initializeApp(config)

    storage = firebase.storage()
    firestore = firebase.firestore()
    timestamp = firebase.firestore.FieldValue.serverTimestamp()
}

export {
    firebase,
    firestore,
    storage,
    timestamp
}