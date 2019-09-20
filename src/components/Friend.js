import React from "react";

const Friend = props => {
  const {friend} = props

  return(<div>
    {friend.firstName} {friend.lastName}
  </div>)
};

export default Friend
