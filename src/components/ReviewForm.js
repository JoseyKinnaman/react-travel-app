import React from "react";
import PropTypes from "prop-types";
import ReusableForm from './ReusuableForm'

function ReviewForm(props) {
  const ReviewFormStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
    padding: "5px"
  }

  function handleReviewFormSubmission(event) {
    event.preventDefault();
    props.onReviewCreation({ content: event.target.content.value, author: event.target.author.value, place: event.target.place.value, id: v4() });
  }
  return (
    <React.Fragment>
      <div style={ReviewFormStyles}>
        <h3>Add a Review</h3>
        <ReusableForm
          formSubmissionHandler={handleReviewFormSubmission}
        />
      </div>
    </React.Fragment>
  );
}

ReviewForm.propTypes = {
  onReviewCreation: PropTypes.func
};

export default ReviewForm;
