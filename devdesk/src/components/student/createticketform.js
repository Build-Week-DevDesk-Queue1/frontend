import React, { useState } from "react";

function CreateTicketForm() {
  const [createTicket, setCreateTicket] = useState({
    title: "",
    tried: "",
    additionalInfo: ""
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleChange(e) {
    setCreateTicket({ ...createTicket, [e.target.name]: e.target.value });
  }

  function setCategory(e) {
    setSelectedCategory(+e.target.getAttribute("data-id"));
  }

  return (
    <form className="createTicketForm">
      <h2>Let's submit a help ticket.</h2>
      <p className="info-helper">
        <span className="info-helper-astericks">*</span> Required Fields
      </p>
      <div className="form-group">
        <label htmlFor="title">
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
        <label htmlFor="">
          What is this issue about?{" "}
          <span className="info-helper-astericks">*</span>
        </label>
        <div className="category-selection">
          <div
            data-id="0"
            onClick={setCategory}
            className={
              selectedCategory + "" === "0"
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
              selectedCategory + "" === "1"
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
              selectedCategory + "" === "2"
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
              selectedCategory + "" === "3"
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
              selectedCategory + "" === "4"
                ? "category-selection-option category-other category-other-selected"
                : "category-selection-option category-other"
            }
          >
            Other
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">What have you tried?</label>
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
        <label htmlFor="">Anything else we should know?</label>
        <textarea
          value={createTicket.additionalInfo}
          onChange={handleChange}
          name="additionalInfo"
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
