import { combineReducers } from "redux";

// reducers
import apiState from "./api-state-reducer.js";
import newFriendCache from "./new-friend-reducer";
import friends from "./friends-reducer";
import error from "./error-reducer";

export const originalState = {
  apiState: { isLoading: false },
  error: "",
  friends: null,
  newFriendCache: null
};

const rootReducer = combineReducers({
  apiState,
  friends,
  error,
  newFriendCache
});

export default rootReducer;
