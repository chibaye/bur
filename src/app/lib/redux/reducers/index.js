import {combineReducers} from 'redux'

import data from './data'
import files from './files'
import form from './form'

export default combineReducers({
    data,
    files,
    form
})