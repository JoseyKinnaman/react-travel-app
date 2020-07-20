import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  destinations: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_DESTINATION:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_DESTINATION_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        destinations: action.destinations
      });
    case c.GET_DESTINATION_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};

