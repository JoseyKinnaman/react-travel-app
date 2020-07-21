import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'

function DestinationDetail(props) {
  const destinationDetailStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt #9673A6',
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px",
    padding: "5px"
  }
  const { destination, masterDestinationList } = props;
  const pints = masterDestinationList[destination.id].pints;
  return (
    <React.Fragment>
      <div style={destinationDetailStyles}>
        <h1>Destination details:</h1>
        <hr />
        <h3>{destination.place}</h3>
        <h5>written by: {destination.author}</h5>
        <h5>review : {destination.content}</h5>
        {/* <div class="form-group">
          <button onClick={() => props.onClickDelete(destination.id)} class="btn btn-danger">Delete</button>
        </div>
        <div class="form-group">
          <button onClick={props.onClickEdit} class="btn btn-success">Update</button>
        </div> */}
      </div>
    </React.Fragment>
  );
}

DestinationDetail.propTypes = {
  destination: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickBuy: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    masterDestinationList: state.masterDestinationList
  }
}

DestinationDetail = connect(mapStateToProps)(DestinationDetail);

export default DestinationDetail;