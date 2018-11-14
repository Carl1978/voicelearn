import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import DashBoard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import Voice from "./components/dashboard/Voice";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/voice/" component={Voice} />
            <Route exact path="/mario/" component={DashBoard} />
            <Route path="/mario/project/:id" component={ProjectDetails} />
            <Route path="/mario/signin" component={SignIn} />
            <Route path="/mario/signUp" component={SignUp} />
            <Route path="/mario/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
