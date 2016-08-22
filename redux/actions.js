let actions = {

  getList: function(list) {
    return {
      type: 'GET_LIST',
      list: list
    }
  },
  updateList: function(item) {
    return {
      type: 'ADD_ITEM',
      item: item
    }
  },
  changeLocation: function(location) {
    return {
      type: 'LOCATION_CHANGE',
      location: location
    }
  },
};

export default actions
