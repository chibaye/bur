import request from 'request'
import {https} from 'firebase-functions'

export const awake = https.onRequest((req, res) => {
    request('https://us-central1-wnd-io.cloudfunctions.net/io', err => {
        error && console.error(err)
        res.end()
    })
})