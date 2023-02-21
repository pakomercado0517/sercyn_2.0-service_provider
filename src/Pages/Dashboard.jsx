import React from "react";
import Dashboard_Navigate from "../Components/Dashboard_Navigate";
import Dashboard_Display from "../Components/Dashboard_Display";

function Dashboard() {
  return (
    <div>
      {/* component */}
      <Dashboard_Navigate />
      <Dashboard_Display />
    </div>
  );
}

export default Dashboard;
