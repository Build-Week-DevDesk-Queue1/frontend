import React, { useState } from "react";
import CreateTicketForm from "./createticketform";

function StudentDashboard() {
  const [openTickets, setOpenTickets] = useState([
    {
      id: 0,
      category: "Equipment",
      title: "Laptop stop working",
      created: 0,
      attemptedSolution: "Reboot, Apple Genius Bar",
      additionalInfo:
        "I took my laptop to the Apple Genius bar and they Weren't able to get it to work.I dont have the money for a replacement right now."
    },
    {
      id: 1,
      category: "People",
      title: "My team isn't communicating well",
      created: 1,
      attemptedSolution: "Meet individual with my TL and SL",
      additionalInfo:
        "I'm on the Hospital project we aren't able to come to an agreement on the direction of the assignment."
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
      created: 2,
      attemptedSolution: "double check my account information is correct",
      additionalInfo:
        "My account was working couple minutes ago, unable to log back in"
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
  const [optionSelected, setOptionSelected] = useState(1);

  function setSelectedOption(e) {
    setOptionSelected(+e.target.getAttribute("data-id"));
  }

  return (
    <>
      <div className="student-sidebar">
        <h2 className="dashboard-brandname">DevDesk</h2>
        <ul className="option-list">
          <li
            onClick={setSelectedOption}
            data-id="1"
            className={optionSelected + "" === "1" ? "selected-option" : ""}
          >
            Create Ticket
          </li>
          <li
            onClick={setSelectedOption}
            data-id="2"
            className={optionSelected + "" === "2" ? "selected-option" : ""}
          >
            Open Tickets
          </li>
          <li
            onClick={setSelectedOption}
            data-id="3"
            className={optionSelected + "" === "3" ? "selected-option" : ""}
          >
            Closed Tickets
          </li>
        </ul>
      </div>
      <div className="student-main-content">
        <div className="createTicket">
          <CreateTicketForm />
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
