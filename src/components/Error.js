import React from 'react'
import {connect} from 'react-redux'
import {Offline} from "react-detect-offline";
import {error} from "../redux/action-creators"

const Error = (props) => {
  const errorMessage = props.errorMessage
  console.log('..', errorMessage)
  return (<div>
    <div><Offline>You are offline. Please check your network connection.</Offline></div>
    <div>{errorMessage && `Error: ${errorMessage}`}</div>
  </div>)
}

const mapStateToProps = state => {
  return {
    errorMessage: state.errorMessage
  };
};


export default connect(
  mapStateToProps,
)(Error);
