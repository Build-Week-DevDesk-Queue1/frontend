import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ticketAction } from "../../actions";
const { assignTicket } = ticketAction;

function AllTicketModal({ selectedTicket, closeALLTicketModal }) {
  const { user } = useSelector(state => {
    const { user } = state.user;
    return { user };
  });
  const dispatch = useDispatch();

  return (
    <div className="ticket-modal-info">
      <div className="ticket-modal-options">
        <i
          onClick={closeALLTicketModal}
          className="far fa-times-circle ticket-modal-close"
        ></i>
        <button
          onClick={e => {
            dispatch(
              assignTicket(selectedTicket.id, user.id, closeALLTicketModal)
            );
          }}
          className="assign-ticket-btn"
        >
          Assign
        </button>
      </div>
      <h2 className="ticket-modal-category">{selectedTicket.category} Issue</h2>
      <p className="ticket-modal-title">{selectedTicket.title}</p>
      {selectedTicket.additional_info && (
        <div className="more-info">
          <p className="ticket-modal-description-heading">
            Description of issue
          </p>
          <p>{selectedTicket.additional_info}</p>
        </div>
      )}
      {selectedTicket.tried && (
        <div className="tried">
          <p className="ticket-modal-tried-heading">What I've tried</p>
          <p>{selectedTicket.tried}</p>
        </div>
      )}
    </div>
  );
}

export default AllTicketModal;
