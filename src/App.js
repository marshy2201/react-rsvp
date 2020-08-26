import React, { Component } from 'react';

import MainContent from './MainContent';
import Header from './Header';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Lewis",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Megan",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Duke",
        isConfirmed: false,
        isEditing: false
      }
    ]
  }

  updateGuest = (indexToChange, updateGuestProps) => {
    this.setState(prevState => {
      const updatedGuests = [...prevState.guests];
      const updatedGuest = { ...updatedGuests[indexToChange] };

      updateGuestProps(updatedGuest);
      updatedGuests[indexToChange] = updatedGuest;
      
      return { guests: updatedGuests };
    });
  }

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.updateGuest(indexToChange, updatedGuest => {
      updatedGuest[property] = !updatedGuest[property];
    });
  }

  toggleConfirmationAt = indexToChange => {
    this.toggleGuestPropertyAt("isConfirmed", indexToChange);
  }

  removeGuestAt = index => {
    this.setState(prevState => {
      const guests = [...prevState.guests.filter((guest, guestIndex) => guestIndex !== index)];

      return { guests };
    });
  }

  toggleEditAt = indexToChange => {
    this.toggleGuestPropertyAt("isEditing", indexToChange);
  }

  setNameAt = (name, indexToChange) => {
    this.updateGuest(indexToChange, updatedGuest => {
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
    this.setState(prevState => {
      const newGuest = { 
        name: prevState.pendingGuest,
        isConfirmed: false,
        isEditing: false
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
          toggleConfirmationAt={this.toggleConfirmationAt} 
          removeGuestAt={this.removeGuestAt}
          toggleEditAt={this.toggleEditAt}
          setNameAt={this.setNameAt}
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
