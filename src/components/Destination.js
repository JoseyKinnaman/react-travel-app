import React from "react";
import PropTypes from "prop-types";

function Destination(props) {
  const destinationStyles = {
    backgroundColor: '#E1D5E7',
    border: 'solid 1pt #9673A6',
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px",
    padding: "5px",
  }
  return (
    <React.Fragment>
      <div style={destinationStyles}>
        <h3>{props.place}</h3>
        <h5><em>written by:</em> {props.author}</h5>
        <h5><em> review: </em>{props.content}</h5>
        <div class="form-group">
          <button class="btn btn-info" onClick={() => props.whenDestinationClicked(props.id)}> View Details</button>
        </div>
      </div>
    </React.Fragment>
  );
}

Destination.propTypes = {
  place: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenDestinationClicked: PropTypes.func,
};

export default Destination;