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

function calculateNumberOfDays(time) {
  let oldTime = +new Date(time);
  let currentTime = Date.now();

  let differenceInTime = currentTime - oldTime;

  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.floor(differenceInDays);
}

function Helper() {
  const { tickets, helperOption, user } = useSelector(state => {
    const { helperOption } = state;
    const { tickets } = state.tickets;
    const { user } = state.user;
    return { tickets, helperOption, user };
  });

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
          {tickets
            .filter(ticket => {
              return ticket.assigned === false;
            })
            .map(ticket => {
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
                      {calculateNumberOfDays(ticket.created_on)} <br /> day{" "}
                      <br /> old
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
          {tickets
            .filter(ticket => {
              return ticket.assigned_to === user.id;
            })
            .map(ticket => {
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
                      {calculateNumberOfDays(ticket.created_on)} <br /> day{" "}
                      <br /> old
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
