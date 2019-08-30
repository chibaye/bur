import {FORM} from '../types'
import Router from 'next/router'
import {firebase, firestore, storage, timestamp} from '../../firebase'

const upload = (name, file, index = 0) => dispatch => {
    const task = storage.ref(`bursaries/${file.name}`).put(file, {contentType: 'image/jpeg'})

    task.on(firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
            const el = document.getElementById(`${name}-${index}`)
            el.style.opacity = '1'
            el.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }, error => error,
        async () => {
            try {
                const url = await task.snapshot.ref.getDownloadURL()
                dispatch({type: FORM.FIELD, payload: {name, index, url}})
            } catch (e) {
                console.error(e)
            }
        })
}

export const inputChange = e => dispatch =>
    dispatch({type: FORM.INPUT, payload: {e}})

export const fileChange = ({target: {name, files}}) => dispatch => {
    dispatch({type: FORM.FILES, payload: {name, files}})
    files.length > 1 ? [...new Array(2)].map((n, i) => dispatch(upload(name, files[i], i))) : dispatch(upload(name, files[0]))
}

export const post = data => async dispatch => {
    dispatch({type: FORM.LOADING})
    data.created = timestamp
    data.updated = timestamp

    try {
        await firestore.collection('bursaries').add(data)
        await dispatch({type: FORM.LOADING})
        await Router.replace('/thank-you')
    } catch (err) {
        alert('Something went wrong, try again.')
        console.error(err)
    }
}