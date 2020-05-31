import React from "react";
import { studentOptionAction } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
const { setStudentOptions } = studentOptionAction;

function StudentOptionList() {
  const studentOption = useSelector(state => {
    const { studentOption } = state;
    return studentOption;
  });

  const dispatch = useDispatch();

  function setSelectedOption(e) {
    dispatch(setStudentOptions(+e.target.getAttribute("data-id")));
  }

  return (
    <ul className="option-list">
      <li
        onClick={setSelectedOption}
        data-id="1"
        className={studentOption + "" === "1" ? "selected-option" : ""}
      >
        Create Ticket
      </li>
      <li
        onClick={setSelectedOption}
        data-id="2"
        className={studentOption + "" === "2" ? "selected-option" : ""}
      >
        Open Tickets
      </li>
      <li
        onClick={setSelectedOption}
        data-id="3"
        className={studentOption + "" === "3" ? "selected-option" : ""}
      >
        Closed Tickets
      </li>
    </ul>
  );
}

export default StudentOptionList;
