import React from "react";

import {connect} from "react-redux";
import {getNewFriend, sortFriends} from "../redux/action-creators";

const ControlPanel = props => {
  const {getNewFriend, sortFriends, friends} = props;
  return (
    <div>
      <button type="button" onClick={getNewFriend}>
        Get New Friend
      </button>
      {friends.length > 1 && <button type="button" onClick={sortFriends}>
        Sort Friends By Last Name
      </button>}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getNewFriend: () => dispatch(getNewFriend()),
    sortFriends: () => dispatch(sortFriends())
  };
};

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
