const SET_HELPER_OPTIONS = "SET_HELPER_OPTIONS";

function setHelperOptions(id) {
  return {
    type: SET_HELPER_OPTIONS,
    payload: id
  };
}

export { SET_HELPER_OPTIONS, setHelperOptions };
