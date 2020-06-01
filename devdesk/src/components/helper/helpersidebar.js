import React from "react";
import HelperOptionList from "./helperoptionlist";
import { useHistory } from "react-router-dom";

function HelperSidebar() {
  const history = useHistory();
  return (
    <div className="sidebar">
      <h2 className="dashboard-brandname">DevDesk</h2>
      <HelperOptionList />
      <button
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
        className="logOut"
      >
        Log Out
      </button>
    </div>
  );
}

export default HelperSidebar;
