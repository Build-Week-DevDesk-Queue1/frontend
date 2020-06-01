import axiosWithAuth from "../util/axiosWithAuth";

const ADD_TICKET_START = "ADD_TICKET_START";
const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
const ADD_TICKET_FAILURE = "ADD_TICKET_FAILURE";

const FETCH_STUDENT_TICKET_START = "FETCH_STUDENT_TICKET_START";
const FETCH_STUDENT_TICKET_SUCCESS = "FETCH_STUDENT_TICKET_SUCCESS";
const FETCH_STUDENT_TICKET_FAILURE = "FETCH_STUDENT_TICKET_FAILURE";

const EXPAND_STUDENT_TICKET = "EXPAND_STUDENT_TICKET";

const DROPDOWN_STUDENT_TICKET = "DROPDOWN_STUDENT_TICKET";

const SET_STUDENT_TICKET_COMPLETED_START = "SET_STUDENT_TICKET_COMPLETED_START";
const SET_STUDENT_TICKET_COMPLETED_SUCCESS =
  "SET_STUDENT_TICKET_COMPLETED_SUCCESS";
const SET_STUDENT_TICKET_COMPLETED_FAILURE =
  "SET_STUDENT_TICKET_COMPLETED_FAILURE";

const DELETE_STUDENT_TICKET_START = "DELETE_STUDENT_TICKET_START";
const DELETE_STUDENT_TICKET_SUCCESS = "DELETE_STUDENT_TICKET_SUCCESS";
const DELETE_STUDENT_TICKET_FAILURE = "DELETE_STUDENT_TICKET_FAILURE";

const EDIT_STUDENT_TICKET_START = "EDIT_STUDENT_TICKET_START";
const EDIT_STUDENT_TICKET_SUCCESS = "EDIT_STUDENT_TICKET_SUCCESS";
const EDIT_STUDENT_TICKET_FAILURE = "EDIT_STUDENT_TICKET_FAILURE";

const FETCH_ALL_TICKETS_START = "FETCH_ALL_TICKETS_START";
const FETCH_ALL_TICKETS_SUCCESS = "FETCH_ALL_TICKETS_SUCCESS";
const FETCH_ALL_TICKETS_FAILURE = "FETCH_ALL_TICKETS_FAILURE";

const ASSIGN_TICKET_START = "ASSIGN_TICKET_START";
const ASSIGN_TICKET_SUCCESS = "ASSIGN_TICKET_SUCCESS";
const ASSIGN_TICKET_FAILURE = "ASSIGN_TICKET_FAILURE";

const UNASSIGN_TICKET_START = "UNASSIGN_TICKET_START";
const UNASSIGN_TICKET_SUCCESS = "UNASSIGN_TICKET_SUCCESS";
const UNASSIGN_TICKET_FAILURE = "UNASSIGN_TICKET_FAILURE";

const HELPER_SET_TICKET_COMPLETED_START = "HELPER_SET_TICKET_COMPLETED_START";
const HELPER_SET_TICKET_COMPLETED_SUCCESS =
  "HELPER_SET_TICKET_COMPLETED_SUCCESS";
const HELPER_SET_TICKET_COMPLETED_FAILURE =
  "HELPER_SET_TICKET_COMPLETED_FAILURE";

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

function getStudentTickets() {
  return dispatch => {
    dispatch({ type: FETCH_STUDENT_TICKET_START });
    axiosWithAuth()
      .get("/students/tickets")
      .then(res => {
        let tickets = res.data.map(ticket => {
          return { ...ticket, expand: false, revealDropDown: false };
        });
        dispatch({ type: FETCH_STUDENT_TICKET_SUCCESS, payload: tickets });
      })
      .catch(err => {
        dispatch({
          type: FETCH_STUDENT_TICKET_FAILURE,
          payload: "Unable to get student tickets"
        });
      });
  };
}

function setStudentTicketCompleted(ticket) {
  return dispatch => {
    dispatch({ type: SET_STUDENT_TICKET_COMPLETED_START });
    let updateTicket = { ...ticket, completed: true };
    axiosWithAuth()
      .put(`/students/tickets/${ticket.id}`, updateTicket)
      .then(res => {
        dispatch({
          type: SET_STUDENT_TICKET_COMPLETED_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: SET_STUDENT_TICKET_COMPLETED_FAILURE,
          payload: "Unable to set ticket completed"
        });
      });
  };
}

function deleteStudentTicket(id) {
  return dispatch => {
    dispatch({ type: DELETE_STUDENT_TICKET_START });
    axiosWithAuth()
      .delete(`/students/tickets/${id}`)
      .then(res => {
        dispatch({ type: DELETE_STUDENT_TICKET_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: DELETE_STUDENT_TICKET_FAILURE,
          payload: "Unable to delete ticket"
        });
      });
  };
}

function editStudentTicket(id, updateTicket) {
  return dispatch => {
    dispatch({ type: EDIT_STUDENT_TICKET_START });
    axiosWithAuth()
      .put(`/students/tickets/${id}`, updateTicket)
      .then(res => {
        dispatch({ type: EDIT_STUDENT_TICKET_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: EDIT_STUDENT_TICKET_FAILURE,
          payload: "Unable to edit ticket"
        });
      });
  };
}

function helperGetAllTickets() {
  return dispatch => {
    dispatch({ type: FETCH_ALL_TICKETS_START });
    axiosWithAuth()
      .get("/helpers/tickets")
      .then(res => {
        dispatch({ type: FETCH_ALL_TICKETS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: FETCH_ALL_TICKETS_FAILURE,
          payload: "Unable to get available tickets"
        });
      });
  };
}

function assignTicket(ticketId, helperId, closeALLTicketModal) {
  return dispatch => {
    dispatch({ type: ASSIGN_TICKET_START });
    axiosWithAuth()
      .put(`/helpers/tickets/${ticketId}`, {
        assigned_to: helperId,
        assigned: true
      })
      .then(res => {
        dispatch({ type: ASSIGN_TICKET_SUCCESS, payload: res.data });
        closeALLTicketModal();
      })
      .catch(err => {
        dispatch({
          type: ASSIGN_TICKET_FAILURE,
          payload: "Unable to assign ticket to helper"
        });
      });
  };
}

function unassignTicket(ticketId, closeMyTicketModal) {
  return dispatch => {
    dispatch({ type: UNASSIGN_TICKET_START });
    axiosWithAuth()
      .put(`/helpers/tickets/${ticketId}`, {
        assigned: false,
        assigned_to: null
      })
      .then(res => {
        dispatch({ type: UNASSIGN_TICKET_SUCCESS, payload: res.data });
        closeMyTicketModal();
      })
      .catch(err => {
        console.log(err.response.data);
        dispatch({
          type: UNASSIGN_TICKET_FAILURE,
          payload: "Unable to unassign ticket"
        });
      });
  };
}

function helperSetTicketCompleted(ticket) {
  return dispatch => {
    dispatch({ type: HELPER_SET_TICKET_COMPLETED_START });
    axiosWithAuth()
      .put(`/helpers/tickets/${ticket.id}`, {
        completed: true
      })
      .then(res => {
        dispatch({
          type: HELPER_SET_TICKET_COMPLETED_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: HELPER_SET_TICKET_COMPLETED_FAILURE,
          payload: "Unable to set ticket completed"
        });
      });
  };
}

function expandStudentTicket(id) {
  return {
    type: EXPAND_STUDENT_TICKET,
    payload: { id }
  };
}

function dropdownStudentTicket(id) {
  return {
    type: DROPDOWN_STUDENT_TICKET,
    payload: { id }
  };
}

export {
  createStudentTicket,
  getStudentTickets,
  expandStudentTicket,
  dropdownStudentTicket,
  setStudentTicketCompleted,
  deleteStudentTicket,
  editStudentTicket,
  helperGetAllTickets,
  assignTicket,
  unassignTicket,
  helperSetTicketCompleted,
  FETCH_STUDENT_TICKET_START,
  FETCH_STUDENT_TICKET_SUCCESS,
  FETCH_STUDENT_TICKET_FAILURE,
  SET_STUDENT_TICKET_COMPLETED_START,
  SET_STUDENT_TICKET_COMPLETED_SUCCESS,
  SET_STUDENT_TICKET_COMPLETED_FAILURE,
  DELETE_STUDENT_TICKET_START,
  DELETE_STUDENT_TICKET_SUCCESS,
  DELETE_STUDENT_TICKET_FAILURE,
  EDIT_STUDENT_TICKET_START,
  EDIT_STUDENT_TICKET_SUCCESS,
  EDIT_STUDENT_TICKET_FAILURE,
  FETCH_ALL_TICKETS_START,
  FETCH_ALL_TICKETS_SUCCESS,
  FETCH_ALL_TICKETS_FAILURE,
  ADD_TICKET_START,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAILURE,
  ASSIGN_TICKET_START,
  ASSIGN_TICKET_SUCCESS,
  ASSIGN_TICKET_FAILURE,
  UNASSIGN_TICKET_START,
  UNASSIGN_TICKET_SUCCESS,
  UNASSIGN_TICKET_FAILURE,
  HELPER_SET_TICKET_COMPLETED_START,
  HELPER_SET_TICKET_COMPLETED_SUCCESS,
  HELPER_SET_TICKET_COMPLETED_FAILURE,
  EXPAND_STUDENT_TICKET,
  DROPDOWN_STUDENT_TICKET
};
