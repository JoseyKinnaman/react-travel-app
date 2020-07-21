import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props) {
  const FormStyles = {
    backgroundColor: '#F5F5F5',
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
    padding: "5px"
  }
  return (
    <React.Fragment>
      <div style={FormStyles}>
        <form onSubmit={props.formSubmissionHandler} >
          <div class="form-group">
            <input
              type="text-field"
              name='content'
              placeholder='Review Content'
              required />
          </div>
          <div class="form-group">
            <input
              type="text"
              name='author'
              placeholder='Author'
              required />
          </div>
          <div class="form-group">
            <button class="btn btn-dark">Submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;