import React, { useState } from "react";

function HelperFilterTickets() {
  const [filter, setFilter] = useState(false);
  const [categoryFilter, setCategoryFiltor] = useState(false);
  const [statusFilter, setStatusFilter] = useState(false);
  const [assignToFilter, setAssignToFilter] = useState(false);
  const [urgencyFilter, setUrgency] = useState(false);

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
    <div className="filter-tickets">
      <p onClick={changeFilter} className="filters">
        <i
          className={filter ? "fas fa-chevron-down" : "fas fa-chevron-right"}
        ></i>{" "}
        Filter Tickets
      </p>
      <div
        className={filter ? "filter-options filter-reveal" : "filter-options"}
      >
        <p onClick={changeCategoryFilter} className="category-filter">
          <i
            className={
              categoryFilter ? "fas fa-chevron-down" : "fas fa-chevron-right"
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
          <p>Assign</p>
          <p>Assigned</p>
          <p>Closed</p>
        </div>
        <p onClick={changeAssignToFilter} className="assign-filter">
          <i
            className={
              assignToFilter ? "fas fa-chevron-down" : "fas fa-chevron-right"
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
  );
}

export default HelperFilterTickets;
