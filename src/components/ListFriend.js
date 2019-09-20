import React from "react";
import { useDispatch } from "react-redux";
import Friend from "./Friend";
import { deleteFriend } from "../redux/action-creators";
import PropTypes from "prop-types";

const ListFriend = props => {
  const dispatch = useDispatch();

  const { friend } = props;
  return (
    <div>
      <div>
        <Friend friend={friend} />
      </div>
      <button type="button" onClick={() => dispatch(deleteFriend(friend))}>
        Delete Friend
      </button>
    </div>
  );
};

ListFriend.propTypes = {
  friend: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })
};

export default ListFriend;
