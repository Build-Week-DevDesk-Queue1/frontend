const SET_STUDENT_OPTIONS = "SET_STUDENT_OPTIONS";

function setStudentOptions(id) {
  return {
    type: SET_STUDENT_OPTIONS,
    payload: id
  };
}

export { SET_STUDENT_OPTIONS, setStudentOptions };
