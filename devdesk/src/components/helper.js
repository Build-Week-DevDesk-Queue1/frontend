import React, { useState } from "react";

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
  return (
    <div className="main-content">
      <div className="alltickets">
        {alltickets.map(ticket => {
          return (
            <div
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
      .
    </div>
  );
}

export default Helper;
