import admin from 'firebase-admin'
import key from './key'

let auth, db, firestore, messaging, storage

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(key),
        databaseURL: 'https://wnd-io.firebaseio.com'
    })

    auth = admin.auth()
    db = admin.database()
    firestore = admin.firestore()
    messaging = admin.messaging()
    storage = admin.storage()
}

export {
    admin,
    auth,
    db,
    firestore,
    messaging,
    storage
}