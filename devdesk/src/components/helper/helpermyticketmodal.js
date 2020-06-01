import React from "react";
import { useDispatch } from "react-redux";
import { ticketAction } from "../../actions";
const { unassignTicket, helperSetTicketCompleted } = ticketAction;

function MyTicketModal({ closeMyTicketModal, selectedTicket }) {
  const dispatch = useDispatch();
  return (
    <div className="ticket-modal-info">
      <div className="ticket-modal-options ticket-modal-options-variant">
        <i
          onClick={closeMyTicketModal}
          className="far fa-times-circle ticket-modal-close"
        ></i>
        <button
          onClick={() => {
            dispatch(unassignTicket(selectedTicket.id, closeMyTicketModal));
          }}
          className="unassign-ticket-btn"
        >
          Unassign
        </button>
        <button
          onClick={() => {
            dispatch(helperSetTicketCompleted(selectedTicket));
          }}
          className="resolve-ticket-btn"
        >
          Resolve
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

export default MyTicketModal;
