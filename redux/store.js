import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'


let finalCreateStore = compose(
  applyMiddleware()
)(createStore);


export default function configureStore(initialState = { user: {}, location:'' }) {
  return finalCreateStore(rootReducer, initialState)
}
