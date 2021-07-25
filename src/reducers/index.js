import {combineReducers} from 'redux'

import AllNewsReducer from './AllNewsReducer'

export default combineReducers({
    allnews:AllNewsReducer,
})