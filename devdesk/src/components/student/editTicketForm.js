import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ticketAction } from "../../actions";
const { editStudentTicket } = ticketAction;

function EditTicketForm({ selectedTicket, setShowEditModal }) {
  const categories = ["Equipment", "People", "Track", "Finance", "Other"];

  const [editTicket, setEditTicket] = useState({
    title: selectedTicket.title,
    category: categories.findIndex(
      category => category === selectedTicket.category
    ),
    tried: selectedTicket.tried || "",
    additional_info: selectedTicket.additional_info || ""
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setEditTicket({ ...editTicket, [e.target.name]: e.target.value });
  }

  function setCategory(e) {
    setEditTicket({
      ...editTicket,
      category: +e.target.getAttribute("data-id")
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (!editTicket.title && !editTicket.category) {
      return;
    }
    const selectedCategory = categories[editTicket.category];
    let updatedTicket = { ...editTicket, category: selectedCategory };

    dispatch(editStudentTicket(selectedTicket.id, updatedTicket));
  }

  return (
    <form onSubmit={onFormSubmit} className="studentEditForm">
      <header>
        <h2>Edit help ticket.</h2>
        <i
          onClick={() => {
            setShowEditModal(false);
          }}
          className="far fa-times-circle edit-ticket-modal-close"
        ></i>
      </header>
      <p className="info-helper">
        <span className="info-helper-astericks">*</span> Required Fields
      </p>
      <div className="form-group">
        <label>
          What's going on? <span className="info-helper-astericks">*</span>
        </label>
        <input
          value={editTicket.title}
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
              editTicket.category + "" === "0"
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
              editTicket.category + "" === "1"
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
              editTicket.category + "" === "2"
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
              editTicket.category + "" === "3"
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
              editTicket.category + "" === "4"
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
          value={editTicket.tried}
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
          value={editTicket.additional_info}
          onChange={handleChange}
          name="additional_info"
          id=""
          cols="10"
          rows="10"
        ></textarea>
      </div>
      <button type="submit" className="edit-ticket-btn">
        Edit Ticket
      </button>
    </form>
  );
}

export default EditTicketForm;
