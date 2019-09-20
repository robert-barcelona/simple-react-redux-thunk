import {
  STORE_FRIEND,
  DELETE_FRIEND,
  SORT_FRIENDS_BY_NAME, STORE_MANY_FRIENDS
} from "./action-types";
import sort_friends_by_name from "../utils/sort_friends_by_name";

export const initialState = null;

let friends;

function reducer(state = initialState, action) {
  switch (action.type) {
    case SORT_FRIENDS_BY_NAME:
      friends = [...state];
      return friends.sort(sort_friends_by_name);

    case STORE_MANY_FRIENDS:
      console.log('calling store many friends')
      return action.data

    case STORE_FRIEND:
      console.log('calling store friend')
      return [...state, action.data];

    case DELETE_FRIEND:
      return state.filter(friend => friend !== action.data);

    default:
      return state;
  }
}

export default reducer;
