import React from "react";
import { connect } from "react-redux";

const Friend = props => {
  const {friend} = props

  return(<div>
    {friend.firstName} {friend.lastName}
  </div>)
};

const mapDispatchToProps = dispatch => {
  return {};
};
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friend);
