import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import Utility from './Utility/Utility'

class AddUserComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      email: '',
      password: '',
      salt: 'Stage3 secret'
    };
  }
  handleChangeName(e) {
    this.setState({name: e.target.value})
  }

  handleChangeEmail(e) {
    this.setState({email: e.target.value})
  }

  handleClick(e) {
    var t = this;
    // var data = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   hashed_password: this.state.password,
    //   salt: this.state.salt,
    //   __v: '0',
    //   _id: new Date().getTime()
    // };
    Utility.post('//104.155.216.156:8080/user', {"user":{"name":this.state.name,"email":this.state.email}}, 'application/json', function (response) {
      console.log(response);
      if (response) {
        //update ui in store
        // console.log(t.props);
      // data = {'_id':'4','__v':'__v','salt':'salt','hashed_password':'test','email':'test@gmail.com','name':'test'}
        t.props.actions.updateList(data);
      }
    });
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div>
        <div>
          <div>Name : <input type="text" placeholder="Name" onChange={this.handleChangeName.bind(this)}/></div>
          <div>Email : <input type="text" placeholder="Email" onChange={this.handleChangeEmail.bind(this)}/></div>
          <div>Password : <input type="password" placeholder="Password" onChange={this.handleChangePassword.bind(this)}/></div>
          <input type="submit" value="Submit" onClick={this.handleClick.bind(this)}/>
        </div>
      </div>
    )
  }
}
export default AddUserComponent
