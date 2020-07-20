import * as c from './ActionTypes'

export const requestDestinations = () => ({
  type: c.REQUEST_DESTINATION
});

export const getDestinationsSuccess = (destinations) => ({
  type: c.GET_DESTINATION_SUCCESS,
  destinations
});

export const getDestinationsFailure = (error) => ({
  type: c.GET_DESTINATION_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestDestinations);
    return fetch(`https://travel-api-rails.herokuapp.com/`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getDestinationsSuccess(jsonifiedResponse));
          console.log(jsonifiedResponse)
        })
      .catch((error) => {
        dispatch(getDestinationsFailure(error));
      });
  }
};
