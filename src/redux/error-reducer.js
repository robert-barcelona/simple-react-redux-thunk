
import {ERROR} from "./action-types"

export const initialState = ''


function reducer(state = initialState, action) {

  switch (action.type) {

    case ERROR:
      return {isLoading:action.data}

    default:
      return state;
  }
}

export default reducer;
