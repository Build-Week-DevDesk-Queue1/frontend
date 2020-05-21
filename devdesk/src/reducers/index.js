import { combineReducers } from "redux";
import helperOptionReducer from "./helperOptionReducer";

const rootReducer = combineReducers({
  helperOption: helperOptionReducer
});

export default rootReducer;
