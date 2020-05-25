import React from "react";
import Login from "./components/Login Form/Login";
import "./App.css";
import {Route} from "react-router-dom";
import Registration from "./components/Login Form/Registration";
import Helper from "./components/Login Form/Helper-Login";

function App() {
  return (
    <div className="App">
      <body>
        <div className="box">
        <span></span>
    <span></span>
    <span></span>
    <span></span>
        <Route exact path="/" component={Login} />
        <Route exact path="/helper" component={Helper} />
        <Route path="/registration" component={Registration} />
        </div>
        </body>
    </div>
  );
  }

export default App;
