import React, {Component} from 'react'
import Utility from './Utility/Utility'
import UserComponent from './UserComponent'
import Immutable from 'immutable'

class UserListComponent extends Component {

  constructor(props, context) {
    super(props, context)
  }


  componentDidMount() {

    // Utility.get
  }

  render() {
    var user_rows = [];
    // console.log('userlist comp');
    // console.log(this.props.list);
    this.props.list.get('list', Immutable.Map({})).map(function(user){
      // console.log('user');
      // console.log(user);
      user_rows.push(
        <UserComponent
          key={user.get('_id')}
          user={user}
        />
      );
    });

    return (
      <div>
        {user_rows}
      </div>
    )
  }
}

export default UserListComponent
