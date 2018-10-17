import React, { Component } from 'react';
import Contact from './Components/Contact'
import Header from './Components/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header branding="Contact Manager" />
       <Contact name="John Doe" email='hello@gmail.com' phone='444-444-333' />
      </div>
    );
  }
}

export default App;
