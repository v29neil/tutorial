import { combineReducers } from 'redux'
import list from './list'
import location from './location'

const rootReducer = combineReducers({
  list,
  location
})

export default rootReducer
