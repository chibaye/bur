import {FORM} from '../types'

const INITIAL_STATE = { loading: false }

export default (state = INITIAL_STATE, action) =>
    action.type === FORM.LOADING ? {...state, ...{loading: !state.loading}} : state