import {
  STORE_FRIEND,
  DELETE_FRIEND,
  SORT_FRIENDS_BY_NAME
} from "./action-types";
import sort_friends_by_name from "../utils/sort_friends_by_name";

export const initialState = [];

let friends;

function reducer(state = initialState, action) {
  switch (action.type) {
    case SORT_FRIENDS_BY_NAME:
      console.log('sorted')
      friends = [...state];
      return friends.sort(sort_friends_by_name);

    case STORE_FRIEND:
      return [...state, action.data];

    case DELETE_FRIEND:
      return state.filter(friend => friend !== action.data);

    default:
      return state;
  }
}

export default reducer;
