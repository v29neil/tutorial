import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
// import AddUserComponent from '../components/AddUserComponent'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import Immutable from 'immutable'
import { Router, Route,  browserHistory } from 'react-router'

const initialState = {
  list: Immutable.fromJS({}),
  location : 'list'
}
// console.log('tests');
let store = configureStore(initialState)
// let url = 'http://104.155.216.156:8080/user';
// Utility.get(url,function(data){
//   //array of object
//
// });
render(
  <Provider store={store}>
    {/*<Router history={browserHistory}>*/}
      {/*<Route path="/" component={App} />*/}
      {/*<Route path="/add" component={AddUserComponent}/>*/}
    {/*</Router>*/}
    <App />
  </Provider>,
  document.getElementById('app')
)
