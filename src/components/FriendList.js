import React, {useEffect} from "react";

import {connect} from "react-redux";
import ListFriend from "./ListFriend";
import {persistData, retrievePersistedData} from "../logic";
import {PERSIST_FRIENDS} from "../helpers/Constants";
import {storeManyFriends} from "../redux/action-creators";

const FriendList = props => {
  const {friends, storeManyFriends} = props;

  useEffect(() => {
    if (friends === null) return;
    const error = persistData(friends, PERSIST_FRIENDS);
    if (error) console.log("error persisting data:", error);
  }, [friends]);

  useEffect(() => {
    const storedFriends = retrievePersistedData(PERSIST_FRIENDS);
    if (storedFriends) {
      storeManyFriends(storedFriends);
    }
  }, []);

  return (
    <div>
      {friends && friends.length !== 0 &&
      friends.map(friend => {
        return <ListFriend friend={friend} key={friend.id}/>;
      })}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    storeManyFriends: friends => dispatch(storeManyFriends(friends))
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
)(FriendList);
