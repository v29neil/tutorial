import Immutable from 'immutable'

let list = function(state = {}, action) {
  switch (action.type) {
    case 'GET_LIST':
       // return  Object.assign(state , action.list);
      return state.set( 'list', action.list.reduce(function(result, item) {
        return result.set(item['_id'], Immutable.Map(item));
      }, Immutable.OrderedMap()), Immutable.OrderedMap({}));
      // return state.set('list', l);
    case 'ADD_ITEM':
      let obj = {};
      obj[action.item['_id']] = Immutable.Map(action.item);
      console.log(state);
      console.log(action);
      console.log(state.get('list'));
      return state.set('list', state.get('list').merge(Immutable.Map(obj) ));
    default:
      return state;
  }
};

export default list;
