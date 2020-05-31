import React, { useState, useEffect } from "react";
import CreateTicketForm from "./createticketform";
import StudentOptionList from "./studentoptionlist";
import { useSelector, useDispatch } from "react-redux";
import axiosWithAuth from "../../util/axiosWithAuth";
import Modal from "./modal";
import EditTicketForm from "./editTicketForm";
import { ticketAction } from "../../actions";
const {
  getStudentTickets,
  expandStudentTicket,
  dropdownStudentTicket,
  setStudentTicketCompleted,
  deleteStudentTicket
} = ticketAction;

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

function calculateNumberOfDays(time) {
  let oldTime = +new Date(time);
  let currentTime = Date.now();

  let differenceInTime = currentTime - oldTime;

  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.floor(differenceInDays);
}

function StudentContent({
  studentOption,
  tickets,
  setSelectedTicket,
  setShowEditModal
}) {
  const dispatch = useDispatch();

  switch (studentOption) {
    case 1:
      return (
        <div className="createTicket">
          <CreateTicketForm />
        </div>
      );
    case 2:
      return (
        <div className="openTickets">
          {tickets
            .filter(ticket => {
              return ticket.completed === false;
            })
            .map(ticket => {
              return (
                <div
                  onClick={() => {
                    dispatch(expandStudentTicket(ticket.id));
                  }}
                  key={ticket.id}
                  className={`ticket ${setCategory(ticket.category)}`}
                >
                  {ticket.revealDropDown && (
                    <div className="ticket-dropdown">
                      <p
                        onClick={e => {
                          e.stopPropagation();
                          setSelectedTicket(ticket);
                          setShowEditModal(true);
                          dispatch(dropdownStudentTicket(ticket.id));
                        }}
                      >
                        Edit Details
                      </p>
                      <p
                        onClick={e => {
                          e.stopPropagation();
                          dispatch(deleteStudentTicket(ticket.id));
                        }}
                      >
                        Delete Ticket
                      </p>
                      <p
                        onClick={e => {
                          e.stopPropagation();
                          dispatch(setStudentTicketCompleted(ticket));
                        }}
                      >
                        Mark Resolved
                      </p>
                    </div>
                  )}
                  <div className="ticket-info">
                    <div className="days">
                      {calculateNumberOfDays(ticket.created_on)} <br /> day{" "}
                      <br /> old
                    </div>
                    <div className="issue">
                      <div className="issue-category">
                        <p>{ticket.category} Issue</p>
                        <i
                          onClick={e => {
                            e.stopPropagation();
                            dispatch(dropdownStudentTicket(ticket.id));
                          }}
                          className="fas fa-ellipsis-v"
                        ></i>
                      </div>
                      <div className="issue-title">{ticket.title}</div>
                    </div>
                  </div>
                  {ticket.expand && (
                    <div className="ticket-more-info">
                      {ticket.tried && (
                        <>
                          <p className="what-tried">What you've tried</p>
                          <div className="attempted-solution">
                            {ticket.tried}
                          </div>
                        </>
                      )}
                      {ticket.additional_info && (
                        <>
                          <p className="issue-more-info">More info</p>
                          <div className="additionalInfo">
                            {ticket.additional_info}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      );
    case 3:
      return (
        <div className="closeTickets">
          {tickets
            .filter(ticket => {
              return ticket.completed;
            })
            .map(ticket => {
              return (
                <div
                  key={ticket.id}
                  className={`ticket ${setCategory(ticket.category)}`}
                >
                  {ticket.revealDropDown && (
                    <div className="ticket-dropdown">
                      <p
                        onClick={e => {
                          e.stopPropagation();
                          dispatch(deleteStudentTicket(ticket.id));
                        }}
                      >
                        Delete Ticket
                      </p>
                    </div>
                  )}
                  <div className="ticket-info">
                    <div className="days">
                      {calculateNumberOfDays(ticket.created_on)} <br /> day{" "}
                      <br /> old
                    </div>
                    <div className="issue">
                      <div className="issue-category">
                        <p>{ticket.category} Issue</p>
                        <i
                          onClick={e => {
                            e.stopPropagation();
                            dispatch(dropdownStudentTicket(ticket.id));
                          }}
                          className="fas fa-ellipsis-v"
                        ></i>
                      </div>
                      <div className="issue-title">{ticket.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      );
    default:
      return (
        <div className="content-error">
          <p>Unable to render content</p>
        </div>
      );
  }
}

function StudentDashboard() {
  const { tickets, studentOption } = useSelector(state => {
    const { studentOption } = state;
    const { tickets } = state.tickets;
    return { tickets, studentOption };
  });
  const dispatch = useDispatch();

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    dispatch(getStudentTickets());
  }, []);

  return (
    <>
      {showEditModal && (
        <Modal>
          <div className="studentEditModal">
            <EditTicketForm
              selectedTicket={selectedTicket}
              setShowEditModal={setShowEditModal}
            />
          </div>
        </Modal>
      )}
      <div className="student-sidebar">
        <h2 className="dashboard-brandname">DevDesk</h2>
        <StudentOptionList />
      </div>
      <div className="student-main-content">
        <StudentContent
          studentOption={studentOption}
          tickets={tickets}
          setSelectedTicket={setSelectedTicket}
          setShowEditModal={setShowEditModal}
        />
      </div>
    </>
  );
}

export default StudentDashboard;
