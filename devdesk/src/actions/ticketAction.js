import axiosWithAuth from "../util/axiosWithAuth";

const ADD_TICKET_START = "ADD_TICKET_START";
const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
const ADD_TICKET_FAILURE = "ADD_TICKET_FAILURE";

function createStudentTicket(ticket) {
  return dispatch => {
    dispatch({ type: ADD_TICKET_START });
    axiosWithAuth()
      .post("/students/tickets", ticket)
      .then(res => {
        dispatch({ type: ADD_TICKET_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: ADD_TICKET_FAILURE,
          payload: "Unable to create student ticket"
        });
      });
  };
}

export {
  createStudentTicket,
  ADD_TICKET_START,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAILURE
};
