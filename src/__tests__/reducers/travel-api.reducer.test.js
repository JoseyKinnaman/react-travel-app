import travelReducer from '../../reducers/travel-reducer'
import * as c from './../../actions/ActionTypes';

describe('travelReducer', () => {
  let action;
  const defaultState = {
    isLoading: false,
    destinations: [],
    error: null
  };

  const loadingState = {
    isLoading: false,
    destinations: [],
    error: null
  };


  test('should successfully return the default state if no action is passed into it', () => {
    expect(travelReducer(defaultState, { type: null })).toEqual(
      {
        isLoading: false,
        destinations: [],
        error: null
      }
    );
  });

  test('requesting destinations should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_DESTINATION
    }
    expect(travelReducer(defaultState, action)).toEqual({
      isLoading: true,
      destinations: [],
      error: null
    });
  });

  test('successfully getting destinations should change isLoading to false and update destinations', () => {
    const destinations = "Tokyo";
    action = {
      type: c.GET_DESTINATION_SUCCESS,
      destinations
    };

    expect(travelReducer(loadingState, action)).toEqual({
      isLoading: false,
      destinations: "Tokyo",
      error: null
    });
  });

  test('failing to get headlines should change isLoading to false and add an error message', () => {
    const error = 'An error';
    action = {
      type: c.GET_DESTINATION_FAILURE,
      error
    }
    expect(travelReducer(loadingState, action)).toEqual({
      isLoading: false,
      destinations: [],
      error: 'An error'
    });

  });


});