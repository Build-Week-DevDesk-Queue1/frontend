import { combineReducers } from "redux";
import helperOptionReducer from "./helperOptionReducer";
import studentOptionReducer from "./studentOptionReducer";
import userReducer from "./userReducer";
import ticketReducer from "./ticketReducer";

const rootReducer = combineReducers({
  helperOption: helperOptionReducer,
  studentOption: studentOptionReducer,
  user: userReducer,
  tickets: ticketReducer
});

export default rootReducer;
