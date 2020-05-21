import React, { useState } from "react";
import Modal from "./modal";
import { useSelector } from "react-redux";

function setCategory(category) {
  category = category.toLowerCase();
  switch (category) {
    case "people":
      return category;
    case "equipment":
      return category;
    case "track":
      return category;
    case "finance":
      return category;
    case "other":
      return category;
    default:
      return "";
  }
}

function Helper() {
  const helperOption = useSelector(state => {
    const { helperOption } = state;
    return helperOption;
  });
  const [alltickets, setAllTickets] = useState([
    {
      id: 0,
      category: "Equipment",
      title: "Laptop stop working",
      created: 0
    },
    {
      id: 1,
      category: "People",
      title: "My team isn't communicating well",
      created: 1
    },
    {
      id: 2,
      category: "Track",
      title: "I need to go on a Hiatus",
      created: 2
    },
    {
      id: 3,
      category: "People",
      title: "I'm having problems with my SL",
      created: 2
    },
    {
      id: 4,
      category: "Finance",
      title: "Something's wrong with my account",
      created: 2
    },
    {
      id: 5,
      category: "Other",
      title: "Does Lambda school hire students",
      created: 3
    },
    {
      id: 6,
      category: "People",
      title: "I'm having trouble with my instructor",
      created: 3
    },
    {
      id: 7,
      category: "Track",
      title: "I need to go on a Hiatus",
      created: 3
    },
    {
      id: 8,
      category: "People",
      title: "I'm having problems with my TL",
      created: 4
    }
  ]);
  const [myTickets, setMyTickets] = useState([
    {
      id: 2,
      category: "Track",
      title: "I need to go on a Hiatus",
      created: 2,
      assign: true,
      assignTo: {
        id: 105,
        name: "mark"
      }
    },
    {
      id: 3,
      category: "People",
      title: "I'm having problems with my SL",
      created: 2,
      assign: true,
      assignTo: {
        id: 105,
        name: "mark"
      }
    },
    {
      id: 4,
      category: "Finance",
      title: "Something's wrong with my account",
      created: 2,
      assign: true,
      assignTo: {
        id: 105,
        name: "mark"
      }
    }
  ]);
  const [showALLTicketModal, setShowALLTicketModal] = useState(false);
  const [showMyTicketModal, setShowMyTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  function closeALLTicketModal() {
    setShowALLTicketModal(false);
  }

  function closeMyTicketModal() {
    setShowMyTicketModal(false);
  }

  return (
    <div className="main-content">
      {showALLTicketModal && (
        <Modal>
          <div className="ticket-modal-info">
            <div className="ticket-modal-options">
              <i
                onClick={closeALLTicketModal}
                className="far fa-times-circle ticket-modal-close"
              ></i>
              <button className="assign-ticket-btn">Assign</button>
            </div>
            <h2 className="ticket-modal-category">
              {alltickets[selectedTicket].category} Issue
            </h2>
            <p className="ticket-modal-title">
              {alltickets[selectedTicket].title}
            </p>
            <div className="more-info">
              <p className="ticket-modal-description-heading">
                Description of issue
              </p>
              <p>
                I'm on the Hospital project, we aren't able to agree on the
                direction of the assignment.
              </p>
            </div>
            <div className="tried">
              <p className="ticket-modal-tried-heading">What I've tried</p>
              <p>Meet individual with my TL and SL</p>
            </div>
          </div>
        </Modal>
      )}
      {showMyTicketModal && (
        <Modal>
          <div className="ticket-modal-info">
            <div className="ticket-modal-options ticket-modal-options-variant">
              <i
                onClick={closeMyTicketModal}
                className="far fa-times-circle ticket-modal-close"
              ></i>
              <button className="unassign-ticket-btn">Unassign</button>
              <button className="resolve-ticket-btn">Resolve</button>
            </div>
            <h2 className="ticket-modal-category">
              {myTickets[selectedTicket].category} Issue
            </h2>
            <p className="ticket-modal-title">
              {myTickets[selectedTicket].title}
            </p>
            <div className="more-info">
              <p className="ticket-modal-description-heading">
                Description of issue
              </p>
              <p>
                I'm on the Hospital project, we aren't able to agree on the
                direction of the assignment.
              </p>
            </div>
            <div className="tried">
              <p className="ticket-modal-tried-heading">What I've tried</p>
              <p>Meet individual with my TL and SL</p>
            </div>
          </div>
        </Modal>
      )}
      {helperOption === 1 ? (
        <div className="alltickets">
          {alltickets.map((ticket, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedTicket(index);
                  setShowALLTicketModal(true);
                }}
                key={ticket.id}
                className={`ticket ${setCategory(ticket.category)}`}
              >
                <div className="days">
                  {ticket.created} <br /> day <br /> old
                </div>
                <div className="issue">
                  <div className="issue-category">{ticket.category} Issue</div>
                  <div className="issue-title">{ticket.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mytickets">
          {myTickets.map((ticket, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedTicket(index);
                  setShowMyTicketModal(true);
                }}
                key={ticket.id}
                className={`ticket ${setCategory(ticket.category)}`}
              >
                <div className="days">
                  {ticket.created} <br /> day <br /> old
                </div>
                <div className="issue">
                  <div className="issue-category">{ticket.category} Issue</div>
                  <div className="issue-title">{ticket.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Helper;
