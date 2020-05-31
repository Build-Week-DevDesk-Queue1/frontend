import React from "react";

function AllTicketModal({ selectedTicket, closeALLTicketModal }) {
  return (
    <div className="ticket-modal-info">
      <div className="ticket-modal-options">
        <i
          onClick={closeALLTicketModal}
          className="far fa-times-circle ticket-modal-close"
        ></i>
        <button className="assign-ticket-btn">Assign</button>
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

export default AllTicketModal;
