import React from "react";
import { connect } from "react-redux";

const Friend = props => {
  const {friend} = props

  return(<div>
    {friend.firstName} {friend.lastName}
  </div>)
};

export default Friend
