import { combineReducers } from "redux";
import helperOptionReducer from "./helperOptionReducer";
import studentOptionReducer from "./studentOptionReducer";

const rootReducer = combineReducers({
  helperOption: helperOptionReducer,
  studentOption: studentOptionReducer
});

export default rootReducer;
