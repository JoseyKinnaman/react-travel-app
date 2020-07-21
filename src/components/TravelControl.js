import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import DestinationList from './DestinationList';
import DestinationDetail from './Destination'
import PropTypes from "prop-types";
import * as a from './../actions'
import ReviewForm from './ReviewForm';
import Destination from './Destination';

class TravelControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDestination: null
      //editing?
    }
  }

  handleClick =  () => {
    if (this.state.selectedDestination != null) {
      this.setState({
        selectedDestination: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action)
    }
  };

  handleChangingSelectedDetail = (id) => {
    // const { dispatch } = this.props;
    // const action = a.selectDetail(id)
    // const selectedDetail = this.props.masterDetailList[id];
    // dispatch(action);
    // not sure if this is the right action?
    // this.setState({ selectedDetail: selectedDetail });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedDestination != null) {
      currentlyVisibleState = <DestinationDetail
      />
      buttonText = "Return to Destination List"
    } 
    else if (this.props.formVisibleOnPage){
      currentlyVisibleState = (<ReviewForm onReviewCreation={this.handleAddingReviewToList}/>);
      buttonText = "Return to Destination List"
    } else {
      currentlyVisibleState = (<DestinationList destinations={this.props}  />);
      console.log(this.props.com)
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TravelControl.propTypes = {
  destinations: PropTypes.object,
  isLoading: PropTypes.string,
  error: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    destinations: state.destinations,
    isLoading: state.isLoading,
    error: state.error
  }
}

 TravelControl = connect(mapStateToProps)(TravelControl);

export default TravelControl;