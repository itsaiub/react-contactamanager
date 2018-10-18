import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload)
    }

    default: 
    return state;
  }
}
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jon@gmail.com",
        phone: "444-444-4444"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "kareen@gmail.com",
        phone: "444-444-3333"
      },
      {
        id: 3,
        name: "Jonathan Doe",
        email: "doe@gmail.com",
        phone: "444-444-5555"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;