import {FORM} from '../types'

const INITIAL_STATE = { ids: '', letter: '', certificate: '', photos: '', payment: ''}

export default (state = INITIAL_STATE, action) =>
    action.type === FORM.FILES ? {...state, ...{[action.payload.name]: action.payload.files}} : state