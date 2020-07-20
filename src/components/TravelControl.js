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
          <div class="card text-black bg-info mb-3">
            <h3 className="card-header">Destinations:</h3>

            <ul>
              {/* {destinations.breed}
            <hr />
            {destinations.desc} */}
              {destinations.map((destination, index) =>
                <div class="card text-white bg-dark mb-3">
                  <li key={index}>
                    <div className="card-header">{destination.place}</div>
                    <div className="card-body">
                      <h5 class="card-title">{destination.author}</h5>
                      <p className="card-text">{destination.content}</p>
                    </div>
                  </li>
                </div>
              )}
            </ul>
          </div>
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