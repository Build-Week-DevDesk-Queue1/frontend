import React from "react";
import Login from "./components/Login Form/Login";
import "./App.css";
import {Route} from "react-router-dom";
import Registration from "./components/Login Form/Registration";

function App() {
  return (
    <div className="App">
      <section className="component-box">
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </section>
    </div>
  );
  }

export default App;
