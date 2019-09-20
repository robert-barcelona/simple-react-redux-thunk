import React from "react";
import PropTypes from 'prop-types';

const Friend = props => {
  const {friend} = props

  return(<div>
    {friend.firstName} {friend.lastName}
  </div>)
};

Friend.propTypes = {
  friend: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })
};

export default Friend
