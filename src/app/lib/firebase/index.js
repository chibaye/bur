import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBj9ZGKHjoif93eSPPnIy9R7nNvxYheHN8",
    authDomain: "wnd-io.firebaseapp.com",
    databaseURL: "https://wnd-io.firebaseio.com",
    projectId: "wnd-io",
    storageBucket: "wnd-io.appspot.com",
    messagingSenderId: "680439626861",
    appId: "1:680439626861:web:93a1a783231f118a"
}

const warn = e => console.warn(e)

let auth, firestore, storage, timestamp

if (!firebase.apps.length) {
    firebase.initializeApp(config)

    auth = firebase.auth()
    auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(warn)

    storage = firebase.storage()
    firestore = firebase.firestore()
    timestamp = firebase.firestore.FieldValue.serverTimestamp()
}

export {
    auth,
    firebase,
    firestore,
    storage,
    timestamp
}