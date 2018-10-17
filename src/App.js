import React, { Component } from 'react';
import Contacts from './Components/Contacts'
import Header from './Components/Header'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Header branding="Contact Manager" />
       <div className="container">
         <Contacts />
          {/* <Contact name="John Doe" email='hello@gmail.com' phone='444-444-333' /> */}
       </div>
      </div>
    );
  }
}

export default App;
