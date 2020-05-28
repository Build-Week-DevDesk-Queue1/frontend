import { studentOptionAction } from "../actions";

const { SET_STUDENT_OPTIONS } = studentOptionAction;

function studentOptionReducer(studentOption = 1, action) {
  switch (action.type) {
    case SET_STUDENT_OPTIONS:
      return action.payload;
    default:
      return studentOption;
  }
}

export default studentOptionReducer;
