import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Friend from "./Friend";
import { deleteFriend } from "../redux/action-creators";

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

export default ListFriend;
