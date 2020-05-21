import React from "react";
import HelperDashboard from "./components/helper/helperdashboard";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/helper-dashboard">
          <HelperDashboard />
        </Route>
      </div>
    </Router>
  );
}

export default App;
