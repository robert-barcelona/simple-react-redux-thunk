import React from "react";

import { connect } from "react-redux";
import ListFriend from "./ListFriend"

const FriendList = props => {
  const { friends } = props;

  return (
    <div>
      {friends.length !== 0 &&
        friends.map(friend => {
          return <ListFriend friend={friend} key={friend.id} />;
        })}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {};
};
const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendList);
