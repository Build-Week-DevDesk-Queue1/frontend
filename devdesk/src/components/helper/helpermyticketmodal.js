import React from "react";

function MyTicketModal({ closeMyTicketModal, selectedTicket }) {
  return (
    <div className="ticket-modal-info">
      <div className="ticket-modal-options ticket-modal-options-variant">
        <i
          onClick={closeMyTicketModal}
          className="far fa-times-circle ticket-modal-close"
        ></i>
        <button className="unassign-ticket-btn">Unassign</button>
        <button className="resolve-ticket-btn">Resolve</button>
      </div>
      <h2 className="ticket-modal-category">{selectedTicket.category} Issue</h2>
      <p className="ticket-modal-title">{selectedTicket.title}</p>
      <div className="more-info">
        <p className="ticket-modal-description-heading">Description of issue</p>
        <p>
          I'm on the Hospital project, we aren't able to agree on the direction
          of the assignment.
        </p>
      </div>
      <div className="tried">
        <p className="ticket-modal-tried-heading">What I've tried</p>
        <p>Meet individual with my TL and SL</p>
      </div>
    </div>
  );
}

export default MyTicketModal;
