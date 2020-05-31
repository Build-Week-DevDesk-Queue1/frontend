import React, { useState, useEffect } from "react";
import Modal from "./modal";
import { useSelector, useDispatch } from "react-redux";
import AllTicketModal from "./helperallticketmodal";
import MyTicketModal from "./helpermyticketmodal";
import { ticketAction } from "../../actions";
const { helperGetAllTickets } = ticketAction;

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
    case "finances":
      return "finance";
    case "other":
      return category;
    default:
      return "";
  }
}

function Helper() {
  const { tickets, helperOption } = useSelector(state => {
    const { helperOption } = state;
    const { tickets } = state.tickets;
    return { tickets, helperOption };
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

  const dispatch = useDispatch();

  function closeALLTicketModal() {
    setShowALLTicketModal(false);
  }

  function closeMyTicketModal() {
    setShowMyTicketModal(false);
  }

  useEffect(() => {
    dispatch(helperGetAllTickets());
  }, []);

  return (
    <div className="main-content">
      {showALLTicketModal && (
        <Modal>
          <AllTicketModal
            selectedTicket={selectedTicket}
            closeALLTicketModal={closeALLTicketModal}
          />
        </Modal>
      )}
      {showMyTicketModal && (
        <Modal>
          <MyTicketModal
            selectedTicket={selectedTicket}
            closeMyTicketModal={closeMyTicketModal}
          />
        </Modal>
      )}
      {helperOption === 1 ? (
        <div className="alltickets">
          {tickets.map(ticket => {
            return (
              <div
                onClick={() => {
                  setSelectedTicket(ticket);
                  setShowALLTicketModal(true);
                }}
                key={ticket.id}
                className={`ticket ${setCategory(ticket.category)}`}
              >
                <div className="ticket-info">
                  <div className="days">
                    {ticket.created} <br /> day <br /> old
                  </div>
                  <div className="issue">
                    <div className="issue-category">
                      {ticket.category} Issue
                    </div>
                    <div className="issue-title">{ticket.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mytickets">
          {tickets.map(ticket => {
            return (
              <div
                onClick={() => {
                  setSelectedTicket(ticket);
                  setShowMyTicketModal(true);
                }}
                key={ticket.id}
                className={`ticket ${setCategory(ticket.category)}`}
              >
                <div className="ticket-info">
                  <div className="days">
                    {ticket.created} <br /> day <br /> old
                  </div>
                  <div className="issue">
                    <div className="issue-category">
                      {ticket.category} Issue
                    </div>
                    <div className="issue-title">{ticket.title}</div>
                  </div>
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
