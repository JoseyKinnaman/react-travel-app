import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import DestinationList from './DestinationList';
import DestinationDetail from './Destination'
import PropTypes from "prop-types";
import * as a from './../actions'
import ReviewForm from './ReviewForm';

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
      currentlyVisibleState = (<DestinationList />)
    const { error, isLoading, destinations } = this.props;
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
  }
}
const mapStateToProps = state => {
  return {
    destinations: state.destinations,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(TravelControl);