import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickedHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
