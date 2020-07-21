import React from "react";
// import Destination from "./Destination";
// import PropTypes from "prop-types";
// import { connect } from 'react-redux';
// import * as a from './../actions'
// import { makeApiCall } from '../actions'

function DestinationList(props) {
  const { error, isLoading, destinations } = props.destinations;
  
  if (error) {
    return <React.Fragment>Error</React.Fragment>
  } else if (isLoading) {
    return <React.Fragment>Is Loding...</React.Fragment>
  } else {
    return (
      <React.Fragment>
        <h3 className="card-header">Destinations:</h3>
        <ul>
          {destinations.map((destination, index) =>
            <div class="card text-white bg-dark mb-2">
              <li key={index}>
                <h1 className="card-header">{destination.place}</h1>
                <div className="card-body">
                  <h5 class="card-title"><em>written by: </em>{destination.author}</h5>
                  <p className="card-text"><em>Review: </em>{destination.content}</p>
                </div>
              </li>
            </div>
          )}
        </ul>
      </React.Fragment>
    );
  }
}


export default DestinationList;