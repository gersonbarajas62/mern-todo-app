import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { directive } from "@babel/types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render(){
    return(
      <Router>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/" exact component={CreateTodo} />
        <div className="container">
          <h2>Gerson</h2>
        </div>
      </Router>
    );
  }
}

export default App;
