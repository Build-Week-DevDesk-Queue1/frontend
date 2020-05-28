import React, { useState } from "react";
import CreateTicketForm from "./createticketform";
import StudentOptionList from "./studentoptionlist";
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

function StudentContent({
  studentOption,
  openTickets,
  closedTickets,
  setOpenTickets
}) {
  function expandTicket(id) {
    let tickets = openTickets.map(ticket => {
      if (ticket.id === id) {
        return { ...ticket, expand: !ticket.expand };
      }
      return ticket;
    });
    setOpenTickets(tickets);
  }

  function triggerDropDown(id) {
    let tickets = openTickets.map(ticket => {
      if (ticket.id === id) {
        return { ...ticket, revealDropDown: !ticket.revealDropDown };
      }
      return { ...ticket, revealDropDown: false };
    });
    setOpenTickets(tickets);
  }

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
          {openTickets.map(ticket => {
            return (
              <div
                onClick={() => {
                  expandTicket(ticket.id);
                }}
                key={ticket.id}
                className={`ticket ${setCategory(ticket.category)}`}
              >
                {ticket.revealDropDown && (
                  <div className="ticket-dropdown">
                    <p>Edit Details</p>
                    <p>Delete Ticket</p>
                    <p>Mark Resolved</p>
                  </div>
                )}
                <div className="ticket-info">
                  <div className="days">
                    {ticket.created} <br /> day <br /> old
                  </div>
                  <div className="issue">
                    <div className="issue-category">
                      <p>{ticket.category} Issue</p>
                      <i
                        onClick={e => {
                          e.stopPropagation();
                          triggerDropDown(ticket.id);
                        }}
                        className="fas fa-ellipsis-v"
                      ></i>
                    </div>
                    <div className="issue-title">{ticket.title}</div>
                  </div>
                </div>
                {ticket.expand && (
                  <div className="ticket-more-info">
                    {ticket.attemptedSolution && (
                      <>
                        <p className="what-tried">What you've tried</p>
                        <div className="attempted-solution">
                          {ticket.attemptedSolution}
                        </div>
                      </>
                    )}
                    {ticket.additionalInfo && (
                      <>
                        <p className="issue-more-info">More info</p>
                        <div className="additionalInfo">
                          {ticket.additionalInfo}
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
          {closedTickets.map(ticket => {
            return (
              <div
                key={ticket.id}
                className={`ticket ${setCategory(ticket.category)}`}
              >
                <div className="ticket-info">
                  <div className="days">
                    {ticket.created} <br /> day <br /> old
                  </div>
                  <div className="issue">
                    <div className="issue-category">
                      <p>{ticket.category} Issue</p>
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
  const [openTickets, setOpenTickets] = useState([
    {
      id: 0,
      category: "Equipment",
      title: "Laptop stop working",
      created: 0,
      attemptedSolution: "Reboot, Apple Genius Bar",
      additionalInfo:
        "I took my laptop to the Apple Genius bar and they Weren't able to get it to work. I dont have the money for a replacement right now.",
      expand: false,
      revealDropDown: false
    },
    {
      id: 1,
      category: "People",
      title: "My team isn't communicating well",
      created: 1,
      attemptedSolution: "Meet individual with my TL and SL",
      additionalInfo:
        "I'm on the Hospital project we aren't able to come to an agreement on the direction of the assignment.",
      expand: false,
      revealDropDown: false
    },
    {
      id: 2,
      category: "Track",
      title: "I need to go on a Hiatus",
      created: 2,
      expand: false,
      revealDropDown: false
    },
    {
      id: 3,
      category: "People",
      title: "I'm having problems with my SL",
      created: 2,
      expand: false,
      revealDropDown: false
    },
    {
      id: 4,
      category: "Finance",
      title: "Something's wrong with my account",
      created: 2,
      attemptedSolution: "double check my account information is correct",
      additionalInfo:
        "My account was working couple minutes ago, unable to log back in",
      expand: false,
      revealDropDown: false
    },
    {
      id: 5,
      category: "Other",
      title: "Does Lambda school hire students",
      created: 3,
      expand: false,
      revealDropDown: false
    },
    {
      id: 6,
      category: "People",
      title: "I'm having trouble with my instructor",
      created: 3,
      expand: false,
      revealDropDown: false
    },
    {
      id: 7,
      category: "Track",
      title: "I need to go on a Hiatus",
      created: 3,
      expand: false,
      revealDropDown: false
    },
    {
      id: 8,
      category: "People",
      title: "I'm having problems with my TL",
      created: 4,
      expand: false,
      revealDropDown: false
    }
  ]);
  const [closedTickets, setClosedTickets] = useState([
    {
      id: 0,
      category: "Equipment",
      title: "Laptop stop working",
      created: 0,
      attemptedSolution: "Reboot, Apple Genius Bar",
      additionalInfo:
        "I took my laptop to the Apple Genius bar and they Weren't able to get it to work. I dont have the money for a replacement right now.",
      status: "closed"
    },
    {
      id: 1,
      category: "People",
      title: "My team isn't communicating well",
      created: 1,
      attemptedSolution: "Meet individual with my TL and SL",
      additionalInfo:
        "I'm on the Hospital project we aren't able to come to an agreement on the direction of the assignment.",
      status: "closed"
    },
    {
      id: 2,
      category: "Track",
      title: "I need to go on a Hiatus",
      created: 2,
      status: "closed"
    }
  ]);
  const studentOption = useSelector(state => {
    const { studentOption } = state;
    return studentOption;
  });
  return (
    <>
      <div className="student-sidebar">
        <h2 className="dashboard-brandname">DevDesk</h2>
        <StudentOptionList />
      </div>
      <div className="student-main-content">
        <StudentContent
          setOpenTickets={setOpenTickets}
          studentOption={studentOption}
          openTickets={openTickets}
          closedTickets={closedTickets}
        />
      </div>
    </>
  );
}

export default StudentDashboard;
