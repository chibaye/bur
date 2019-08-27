import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const dev = process.env.NODE_ENV !== 'production'

export default reducers => (initialState = {}) =>
    createStore(
        reducers,
        initialState,
        dev ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk))