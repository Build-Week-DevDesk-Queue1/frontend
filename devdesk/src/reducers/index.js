import { combineReducers } from "redux";
import helperOptionReducer from "./helperOptionReducer";
import studentOptionReducer from "./studentOptionReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  helperOption: helperOptionReducer,
  studentOption: studentOptionReducer,
  user: userReducer
});

export default rootReducer;
