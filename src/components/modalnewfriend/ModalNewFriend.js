import React from "react";
import {useSelector, useDispatch} from "react-redux";
import ReactModal from "react-modal";
import './modalNewFriend.scss'
import Friend from "../friend/Friend";
import {addFriend, clearNewFriend} from "../../redux/action-creators";

const ModalNewFriend = () => {
  const newFriendCache = useSelector(state => state.newFriendCache);
  const dispatch = useDispatch();

  if (newFriendCache) {
    return (
      <ReactModal isOpen={newFriendCache !== null}>
        <div>
          <div>
            <Friend friend={newFriendCache}/>
          </div>
          <button
            type="button"
            onClick={() => dispatch(addFriend(newFriendCache))}
          >
            Add Friend
          </button>
          <button
            type="button"
            onClick={() => dispatch(clearNewFriend(newFriendCache))}
          >
            Cancel
          </button>
        </div>
      </ReactModal>
    );
  } else return null;
};

export default ModalNewFriend;
