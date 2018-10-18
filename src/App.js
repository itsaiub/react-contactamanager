import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/layout/Header";
import AddContact from "./Components/contacts/AddContact";
import About from "./Components/pages/About";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./Components/pages/NotFound";
import Test from "./Components/test/Test";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route path="/about/" component={About} />
                <Route path="/about/:id" component={About} />
                <Route path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
