import React, { Component } from 'react';

import MainContent from './MainContent';
import Header from './Header';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  updateGuest = (id, updateGuestProps) => {
    this.setState(prevState => {
      const updatedGuests = [...prevState.guests];
      const updatedGuest = { ...updatedGuests.find(guest => id === guest.id) };
      const guestIndex = updatedGuests.findIndex(guest => id === guest.id )

      updateGuestProps(updatedGuest);
      updatedGuests[guestIndex] = updatedGuest;
      
      return { guests: updatedGuests };
    });
  }

  toggleGuestProperty = (property, id) => {
    this.updateGuest(id, updatedGuest => {
      updatedGuest[property] = !updatedGuest[property];
    });
  }

  toggleConfirmation = id => {
    this.toggleGuestProperty("isConfirmed", id);
  }

  removeGuest = id => {
    this.setState(prevState => ({
      guests: prevState.guests.filter(guest => guest.id !== id)
    }));
  }

  toggleEdit = id => {
    this.toggleGuestProperty("isEditing", id);
  }

  setName = (name, id) => {
    this.updateGuest(id, updatedGuest => {
      updatedGuest.name = name;
    });
  }

  toggleFilter = () => {
    this.setState(prevState => ({ isFiltered: !prevState.isFiltered }));
  }

  updatePendingGuest = (name) => {
    this.setState({ pendingGuest: name });
  }

  addNewGuest = () => {
    const id = this.newGuestId();

    this.setState(prevState => {
      const newGuest = { 
        name: prevState.pendingGuest,
        isConfirmed: false,
        isEditing: false,
        id
      };
    
      return { 
        guests: [newGuest, ...prevState.guests],
        pendingGuest: "" 
      };
    });
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.filter(guest => guest.isConfirmed).length;

  render() {
    const unconfirmedGuests = this.getTotalInvited() - this.getAttendingGuests();

    return (
      <div className="App">
        <Header 
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.updatePendingGuest}
          addNewGuest={this.addNewGuest}
        />
        <MainContent 
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation} 
          removeGuest={this.removeGuest}
          toggleEdit={this.toggleEdit}
          setName={this.setName}
          isFiltered={this.state.isFiltered}
          pendingGuest={this.state.pendingGuest}
          unconfirmedGuests={unconfirmedGuests}
          totalInvited={this.getTotalInvited()}
          attendingGuests={this.getAttendingGuests()}
          toggleFilter={this.toggleFilter}
        />
      </div>
    );
  }
}

export default App;
