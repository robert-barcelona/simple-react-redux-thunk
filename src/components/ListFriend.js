import React from "react";
import {connect} from "react-redux";
import Friend from "./Friend";
import {deleteFriend} from "../redux/action-creators";

const ListFriend = props => {
  const {friend, deleteFriend} = props;

  return (
    <div>
      <div>
        <Friend friend={friend}/>
      </div>
      <button type="button" onClick={() => deleteFriend(friend)}>
        Delete Friend
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {deleteFriend: friend => dispatch(deleteFriend(friend))};
};
const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFriend);
