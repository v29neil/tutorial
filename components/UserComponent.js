import React, {Component} from 'react'
// import Utility from './Utility/Utility'

class UserComponent extends Component {


  render() {
    let user = this.props.user;
    return (
      <div>
        {user.get('_id')}
        {user.get('__v')}
        {user.get('salt')}
        {user.get('hashed_password')}
        {user.get('email')}
        {user.get('name')}
      </div>
    )
  }
}

export default UserComponent
