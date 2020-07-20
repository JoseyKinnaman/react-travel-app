import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('travel recucer actions', () => {
  it('requestDestinations should create REQUEST_DESTINATIONS action', () => {
    expect(actions.requestDestinations()).toEqual({
      type: c.REQUEST_DESTINATION
    });
  });

  it('getDestinationsSuccess should create GET_DESTINATION_SUCCESS action', () => {
    const destinations = "A destination";
    expect(actions.getDestinationsSuccess(destinations)).toEqual({
      type: c.GET_DESTINATION_SUCCESS,
      destinations
    });
  });
  it('getDestinationsFailure should create GET_DESTINATION_FAILURE action', () => {
    const error = "An error";
    expect(actions.getDestinationsFailure(error)).toEqual({
      type: c.GET_DESTINATION_FAILURE,
      error
    });
  });

})