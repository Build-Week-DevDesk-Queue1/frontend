import { helperOptionAction } from "../actions";

const { SET_HELPER_OPTIONS } = helperOptionAction;

function helperOptionReducer(helperOption = 1, action) {
  switch (action.type) {
    case SET_HELPER_OPTIONS:
      return action.payload;
    default:
      return helperOption;
  }
}

export default helperOptionReducer;
