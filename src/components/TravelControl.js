import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class TravelControl extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, destinations } = this.props;
    if (error) {
      return <React.Fragment>Error</React.Fragment>
    } else if (isLoading) {
      return <React.Fragment>Is Loding...</React.Fragment>
    } else {
      return (
        <React.Fragment>
          <h3>Destinations:</h3>
          <ul>
            {destinations.breed}
            <hr />
            {destinations.desc}
            {/* {destinations.map((destination, id) =>
              <li key={id}>
                <h3>{destination.breed}</h3>
                <p>{destination.desc}</p>
              </li>
            )} */}
          </ul>
        </React.Fragment>
      );
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