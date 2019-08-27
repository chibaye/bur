import {FORM} from '../types'

const INITIAL_STATE = { names: '', surname: '', phone: '', gender: 'M', address: '', email: '', birthday: '', school: '',
    major: '', guardian: '', guardianPhone: '', nrc: '', ids: null, letter: null, certificate: null, photos: null, payment: null}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORM.FIELD:
            const s = state[action.payload.name]
            const p = {[action.payload.index]: {url: action.payload.url}}
            return {...state, ...{[action.payload.name]: {...s, ...p}}}
        case FORM.INPUT:
            action.payload.e.persist()
            const {name, value} = action.payload.e.target
            return {...state, ...{[name]: value}}
    }
    return state
}