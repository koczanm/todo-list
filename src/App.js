import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import TodoDetails from "./components/todos/TodoDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/todo/:id" component={TodoDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
