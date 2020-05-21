import React, { useState } from "react";

function HelperOptionList() {
  const [selectedOption, setSelectedOption] = useState(1);

  function setOption(e) {
    setSelectedOption(+e.target.getAttribute("data-id"));
  }

  return (
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
  );
}

export default HelperOptionList;
