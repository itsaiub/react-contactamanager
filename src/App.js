import React, { Component } from 'react';
import Contacts from './Components/Contacts'
import Header from './Components/Header'
import { Provider } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <React.Fragment>
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </React.Fragment>
      </Provider>   
    );
  }
}

export default App;
