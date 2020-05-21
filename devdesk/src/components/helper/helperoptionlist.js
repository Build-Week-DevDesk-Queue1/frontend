import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { helperOptionAction } from "../../actions";
const { setHelperOptions } = helperOptionAction;

function HelperOptionList() {
  const helperOption = useSelector(state => {
    const { helperOption } = state;
    return helperOption;
  });

  const dispatch = useDispatch();

  function setOption(e) {
    dispatch(setHelperOptions(+e.target.getAttribute("data-id")));
  }

  return (
    <ul className="option-list">
      <li
        onClick={setOption}
        data-id="1"
        className={helperOption + "" === "1" ? "selected-option" : ""}
      >
        All Tickets
      </li>
      <li
        onClick={setOption}
        data-id="2"
        className={helperOption + "" === "2" ? "selected-option" : ""}
      >
        My Tickets
      </li>
    </ul>
  );
}

export default HelperOptionList;
