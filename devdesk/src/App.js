import React from "react";
import Login from "./components/Login Form/Login";
import "./App.css";
import {Route} from "react-router-dom";
import Registration from "./components/Login Form/Registration";
import Helper from "./components/Login Form/Helper-Login";

function App() {
  return (
    <div className="App">
      <section className="component-box">
        <Route exact path="/" component={Login} />
        <Route exact path="/helper" component={Helper} />
        <Route path="/registration" component={Registration} />
      </section>
    </div>
  );
  }

export default App;
