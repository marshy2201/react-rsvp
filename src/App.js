import React, { Component } from 'react';
import GuestList from './GuestList';
import InviteGuestForm from './InviteGuestForm';

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
  getUnconfirmedGuests = () => this.state.guests.filter(guest => !guest.isConfirmed).length;

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <InviteGuestForm 
            pendingGuest={this.state.pendingGuest}
            handleNameInput={e => this.updatePendingGuest(e.target.value)} 
            addNewGuest={this.addNewGuest}
          />
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox" 
                checked={this.state.isFiltered}
                onChange={this.toggleFilter} 
              /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList 
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt} 
            removeGuestAt={this.removeGuestAt}
            toggleEditAt={this.toggleEditAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
