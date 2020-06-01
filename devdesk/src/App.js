import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login Form/Login";
import HelperDashboard from "./components/helper/helperdashboard";
import StudentDashboard from "./components/student/studentdashboard";
import Registration from "./components/Login Form/Registration";
import Helper from "./components/Login Form/Helper-Login";
import PrivateRoute from "./components/privateroute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <Route exact path="/" component={Login} />
        <Route path="/helper" component={Helper} />
        <Route path="/registration" component={Registration} />
      </div>
      <div className="wrapper">
        <PrivateRoute path="/helper-dashboard" component={HelperDashboard} />
        <PrivateRoute path="/student-dashboard" component={StudentDashboard} />
      </div>
    </div>
  );
}

export default App;
