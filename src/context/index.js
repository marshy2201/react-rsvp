import React, { Component } from 'react';

const RsvpContext = React.createContext();

export class Provider extends Component {
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
      <RsvpContext.Provider value={{
        guests: this.state.guests,
        pendingGuest: this.state.pendingGuest,
        isFiltered: this.state.isFiltered,
        unconfirmedGuests,
        totalInvited: this.getTotalInvited(),
        attendingGuests: this.getAttendingGuests(),
        actions: {
          handleConfirmation: this.toggleConfirmation,
          handleRemove: this.removeGuest,
          handleEdit: this.toggleEdit,
          setName: this.setName,
          toggleFilter: this.toggleFilter,
          addNewGuest: this.addNewGuest,
          handleNameInput: this.updatePendingGuest
        }
      }}>
        {this.props.children}  
      </RsvpContext.Provider>
    );
  }
}

export const { Consumer } = RsvpContext;