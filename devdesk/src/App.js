import React, { useState } from "react";
import "./App.css";

// helper funtion to set category class
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

function App() {
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
  const [selectedOption, setSelectedOption] = useState(1);
  const [filter, setFilter] = useState(false);
  const [categoryFilter, setCategoryFiltor] = useState(false);
  const [statusFilter, setStatusFilter] = useState(false);
  const [assignToFilter, setAssignToFilter] = useState(false);
  const [urgencyFilter, setUrgency] = useState(false);

  function setOption(e) {
    setSelectedOption(+e.target.getAttribute("data-id"));
  }

  function changeFilter() {
    setFilter(!filter);
  }

  function changeCategoryFilter() {
    setCategoryFiltor(!categoryFilter);
  }

  function changeStatusFilter() {
    setStatusFilter(!statusFilter);
  }

  function changeAssignToFilter() {
    setAssignToFilter(!assignToFilter);
  }

  function changeUrgency() {
    setUrgency(!urgencyFilter);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <h2 className="dashboard-brandname">DevDesk</h2>
        <ul className="option-list">
          <li
            onClick={setOption}
            data-id="1"
            className={selectedOption + "" === "1" ? "selected-option" : ""}
          >
            All Tickets
          </li>
          <li
            onClick={setOption}
            data-id="2"
            className={selectedOption + "" === "2" ? "selected-option" : ""}
          >
            My Tickets
          </li>
        </ul>
        <div className="filter-tickets">
          <p onClick={changeFilter} className="filters">
            <i
              className={
                filter ? "fas fa-chevron-down" : "fas fa-chevron-right"
              }
            ></i>{" "}
            Filter Tickets
          </p>
          <div
            className={
              filter ? "filter-options filter-reveal" : "filter-options"
            }
          >
            <p onClick={changeCategoryFilter} className="category-filter">
              <i
                className={
                  categoryFilter
                    ? "fas fa-chevron-down"
                    : "fas fa-chevron-right"
                }
              ></i>{" "}
              Categories
            </p>
            <div
              className={
                categoryFilter
                  ? "category-filter-option filter-reveal"
                  : "category-filter-option"
              }
            >
              <p>People</p>
              <p>Equipment</p>
              <p>Track</p>
              <p>Finance</p>
              <p>Other</p>
            </div>
            <p onClick={changeStatusFilter} className="status-filter">
              <i
                className={
                  statusFilter ? "fas fa-chevron-down" : "fas fa-chevron-right"
                }
              ></i>{" "}
              Status
            </p>
            <div
              className={
                statusFilter
                  ? "status-filter-option filter-reveal"
                  : "status-filter-option"
              }
            >
              <p>Open</p>
              <p>Closed</p>
            </div>
            <p onClick={changeAssignToFilter} className="assign-filter">
              <i
                className={
                  assignToFilter
                    ? "fas fa-chevron-down"
                    : "fas fa-chevron-right"
                }
              ></i>{" "}
              Assign to
            </p>
            <div
              className={
                assignToFilter
                  ? "assign-filter-option filter-reveal"
                  : "assign-filter-option"
              }
            >
              <p>Mike</p>
              <p>John</p>
              <p>Sarah</p>
            </div>
            <p onClick={changeUrgency} className="urgency-filter">
              <i
                className={
                  urgencyFilter ? "fas fa-chevron-down" : "fas fa-chevron-right"
                }
              ></i>{" "}
              Urgency
            </p>
            <div
              className={
                urgencyFilter
                  ? "urgency-filter-option filter-reveal"
                  : "urgency-filter-option"
              }
            >
              <p>low</p>
              <p>moderate</p>
              <p>high</p>
            </div>
          </div>
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default App;
