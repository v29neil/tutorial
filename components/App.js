import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import UserListComponent from './UserListComponent'
import AddUserComponent from './AddUserComponent'
import LoaderComponent from './LoaderComponent'
import Utility from './Utility/Utility'


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: false
    }
  }
  componentDidMount() {
    let t = this;
    Utility.get('//104.155.216.156:8080/user', function (data) {
      if(data){
        // data = [{'_id':'1','__v':'__v','salt':'salt','hashed_password':'viveke','email':'vivek29vivek@gmail.com','name':'vivek'},{'_id':'2','__v':'__v','salt':'salt','hashed_password':'vivek2','email':'vivek2@gmail.com','name':'vivek2'},{'_id':'3','__v':'__v','salt':'salt','hashed_password':'sj','email':'sj@gmail.com','name':'sj'}]
        t.props.actions.getList(data[0]);
      t.setState({data:true});
      }
    })
  }
  render() {
    // console.log('render');
    let initialDisplay;
    if(this.state.data === true){
      initialDisplay = <UserListComponent list={this.props.list}/>;
      if (this.props.location.location === 'add') {
        initialDisplay = <AddUserComponent actions={this.props.actions}/>;
      }
    } else {
      initialDisplay = <LoaderComponent />;
    }

    return (
      <div className="main-app">
        <HeaderComponent/>
        <div>
          <button onClick={() => {
            this.props.actions.changeLocation('list')
          }}>Show user
          </button>
          <button onClick={() => {
            this.props.actions.changeLocation('add')
          }}>Add user
          </button>
        </div>
        {initialDisplay}
        <FooterComponent />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
