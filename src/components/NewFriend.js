import React from "react";
import {connect} from "react-redux";
import Friend from "./Friend";
import {addFriend,clearNewFriend} from "../redux/action-creators"

const NewFriend = props => {
  const {newFriendCache, clearNewFriend,addFriend} = props;
  let name;

  if (newFriendCache) {
    return (
      <div>
        <div>
          <Friend friend={newFriendCache}/>
        </div>
        <button type="button" onClick={() => addFriend(newFriendCache)}>Add Friend</button>
        <button type="button" onClick={() => clearNewFriend(newFriendCache)}>Cancel</button>
      </div>
    );
  } else return null;
};

const mapDispatchToProps = dispatch => {
  return {
    addFriend: (friend) =>dispatch(addFriend(friend)),
    clearNewFriend: (friend) =>dispatch(clearNewFriend(friend))
  };
};
const mapStateToProps = state => {
  return {
    newFriendCache: state.newFriendCache
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFriend);
