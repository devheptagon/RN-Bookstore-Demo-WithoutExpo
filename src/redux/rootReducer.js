import { combineReducers } from 'redux'
import { appReducer } from './appReducer'

const rootAppReducer = combineReducers({
    appReducer
})

const rootReducer = (state, action) => {
    return rootAppReducer(state, action)
}  

export default rootReducer