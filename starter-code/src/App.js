import React, { Component } from "react";
import Contact from "./Contact.js";

import contacts from "./contacts.json";

// let randomNumber = Math.floor(Math.random()*(max - min)+min)

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    let ran =
      contacts[Math.floor(Math.random() * (contacts.length - 5 + 1) + 5)];

    if (
      this.state.contacts.includes(el => {
        return el.name === ran.name;
      })
    ) {
      this.addRandomContact();
    }

    this.setState({
      contacts: [ran, ...this.state.contacts]
    });
  };

  sortName = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    });
  };

  sortPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      })
    });
  };

removeContact = () => {
  const filteredContacts = [...this.state.contacts].filter((el) => {
    return  el !== el.id
  })
  this.setState ({
    contacts: filteredContacts
  })
}

  render() {
    return (
      <Contact
        contacts={this.state.contacts}
        randomContact={this.addRandomContact}
        sortName={this.sortName}
        sortPopularity={this.sortPopularity}
        removeContact={this.removeContact}
      />
    );
  }
}

export default App;
