import React from "react";
import HelperOptionList from "./helperoptionlist";
import HelperFilterTickets from "./helperfiltertickets";

function HelperSidebar() {
  return (
    <div className="sidebar">
      <h2 className="dashboard-brandname">DevDesk</h2>
      <HelperOptionList />
      <HelperFilterTickets />
    </div>
  );
}

export default HelperSidebar;
