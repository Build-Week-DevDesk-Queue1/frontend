import { ticketAction } from "../actions";

const {
  ADD_TICKET_START,
  ADD_TICKET_SUCCESS,
  ADD_TICKET_FAILURE
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
    default:
      return state;
  }
}

export default ticketReducer;
