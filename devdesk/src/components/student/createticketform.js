import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axiosWithAuth from "../../util/axiosWithAuth";
import { ticketAction } from "../../actions";
const { createStudentTicket } = ticketAction;

function CreateTicketForm() {
  const categories = ["equipment", "people", "track", "finances", "other"];
  const [createTicket, setCreateTicket] = useState({
    title: "",
    category: null,
    tried: "",
    additional_info: ""
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    setCreateTicket({ ...createTicket, [e.target.name]: e.target.value });
  }

  function setCategory(e) {
    setCreateTicket({
      ...createTicket,
      category: +e.target.getAttribute("data-id")
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (!createTicket.title && !createTicket.category) {
      return;
    }
    const selectedCategory = categories[createTicket.category];
    let newTicket = { ...createTicket, category: selectedCategory };

    dispatch(createStudentTicket(newTicket));
  }

  return (
    <form onSubmit={onFormSubmit} className="createTicketForm">
      <h2>Let's submit a help ticket.</h2>
      <p className="info-helper">
        <span className="info-helper-astericks">*</span> Required Fields
      </p>
      <div className="form-group">
        <label>
          What's going on? <span className="info-helper-astericks">*</span>
        </label>
        <input
          value={createTicket.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Add a Title..."
        />
      </div>
      <div className="form-group">
        <label>
          What is this issue about?{" "}
          <span className="info-helper-astericks">*</span>
        </label>
        <div className="category-selection">
          <div
            data-id="0"
            onClick={setCategory}
            className={
              createTicket.category + "" === "0"
                ? "category-selection-option category-equipment category-equipment-selected"
                : "category-selection-option category-equipment"
            }
          >
            Equipment
          </div>
          <div
            data-id="1"
            onClick={setCategory}
            className={
              createTicket.category + "" === "1"
                ? "category-selection-option category-people category-people-selected"
                : "category-selection-option category-people"
            }
          >
            People
          </div>
          <div
            data-id="2"
            onClick={setCategory}
            className={
              createTicket.category + "" === "2"
                ? "category-selection-option category-track category-track-selected"
                : "category-selection-option category-track"
            }
          >
            Track
          </div>
          <div
            data-id="3"
            onClick={setCategory}
            className={
              createTicket.category + "" === "3"
                ? "category-selection-option category-finances category-finances-selected"
                : "category-selection-option category-finances"
            }
          >
            Finances
          </div>
          <div
            data-id="4"
            onClick={setCategory}
            className={
              createTicket.category + "" === "4"
                ? "category-selection-option category-other category-other-selected"
                : "category-selection-option category-other"
            }
          >
            Other
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>What have you tried?</label>
        <textarea
          value={createTicket.tried}
          onChange={handleChange}
          name="tried"
          id=""
          cols="10"
          rows="10"
        ></textarea>
      </div>
      <div className="form-group">
        <label>Anything else we should know?</label>
        <textarea
          value={createTicket.additional_info}
          onChange={handleChange}
          name="additional_info"
          id=""
          cols="10"
          rows="10"
        ></textarea>
      </div>
      <button type="submit" className="create-ticket-btn">
        Submit Ticket
      </button>
    </form>
  );
}

export default CreateTicketForm;
