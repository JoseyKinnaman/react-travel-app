import React from "react";
import Destination from "./Destination";
import PropTypes from "prop-types";

function DestinationList(props) {
  const DestinationListStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px"
  }
  return (
    <React.Fragment>
      <div style={DestinationListStyles}>
        <h2>Current Tap List:</h2>
        {Object.values(props.destinationList).map((destination) => <Destination
          whenDestinationClicked={props.onDestinationSelection}
          whenDestinationPurchased={props.onClickingBuy}
          place={destination.place}
          author={destination.author}
          content={destination.content}
          id={destination.id}
          key={destination.id}
        />
        )}
      </div>
    </React.Fragment>
  );
}

DestinationList.propTypes = {
  destinationList: PropTypes.object,
  onDestinationSelection: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default DestinationList;