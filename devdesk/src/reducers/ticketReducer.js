import { ticketAction } from "../actions";

const {
  ADD_TICKET_START,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAILURE,
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
  EXPAND_STUDENT_TICKET,
  DROPDOWN_STUDENT_TICKET,
  FETCH_ALL_TICKETS_START,
  FETCH_ALL_TICKETS_SUCCESS,
  FETCH_ALL_TICKETS_FAILURE
} = ticketAction;

const initialState = {
  tickets: [],
  isloading: false,
  error: null
};

function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TICKET_START:
      return { ...state, isloading: true, error: null };
    case ADD_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...action.payload],
        isloading: false,
        error: null
      };
    case ADD_TICKET_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    case FETCH_STUDENT_TICKET_START:
      return { ...state, isloading: true, error: null };
    case FETCH_STUDENT_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...action.payload],
        isloading: false,
        error: null
      };
    case FETCH_STUDENT_TICKET_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    case SET_STUDENT_TICKET_COMPLETED_START:
      return { ...state, isloading: true, error: null };
    case SET_STUDENT_TICKET_COMPLETED_SUCCESS:
      return {
        ...state,
        tickets: [...action.payload],
        isloading: false,
        error: null
      };
    case SET_STUDENT_TICKET_COMPLETED_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    case DELETE_STUDENT_TICKET_START:
      return { ...state, isloading: true, error: null };
    case DELETE_STUDENT_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...action.payload],
        isloading: false,
        error: null
      };
    case DELETE_STUDENT_TICKET_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    case EDIT_STUDENT_TICKET_START:
      return { ...state, isloading: true, error: null };
    case EDIT_STUDENT_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...action.payload],
        isloading: false,
        error: null
      };
    case EDIT_STUDENT_TICKET_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    case FETCH_ALL_TICKETS_START:
      return { ...state, isloading: true, error: action.payload };
    case FETCH_ALL_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: [...action.payload],
        isloading: false,
        error: null
      };
    case FETCH_ALL_TICKETS_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    case EXPAND_STUDENT_TICKET:
      let expandtickets = state.tickets.map(ticket => {
        if (ticket.id === action.payload.id) {
          return { ...ticket, expand: !ticket.expand };
        }
        return ticket;
      });
      return { ...state, tickets: expandtickets };
    case DROPDOWN_STUDENT_TICKET:
      let triggerTickets = state.tickets.map(ticket => {
        if (ticket.id === action.payload.id) {
          return { ...ticket, revealDropDown: !ticket.revealDropDown };
        }
        return { ...ticket, revealDropDown: false };
      });
      return { ...state, tickets: triggerTickets };
    default:
      return state;
  }
}

export default ticketReducer;
