// import Immutable from 'immutable'

let location = function(state = {}, action) {
  switch (action.type) {
    case 'LOCATION_CHANGE':
    return action;
    default:
      return state;
  }
}

export default location
