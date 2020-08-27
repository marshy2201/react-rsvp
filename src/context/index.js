import React, { useState } from 'react';

export const RsvpContext = React.createContext();

let lastGuestId = 0;

export const Provider = (props) => {
  // state
  const [guests, setGuests] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [pendingGuest, setPendingGuest] = useState("");

  // new guest id
  const newGuestId = () => {
    const id = lastGuestId;
    lastGuestId += 1;
    return id;
  }

  // update guest
  const updateGuest = (id, updateGuestProps) => {
    setGuests(prevState => {
      const updatedGuests = [...prevState];
      const updatedGuest = { ...updatedGuests.find(guest => id === guest.id) };
      const guestIndex = updatedGuests.findIndex(guest => id === guest.id )

      updateGuestProps(updatedGuest);
      updatedGuests[guestIndex] = updatedGuest;
      
      return updatedGuests;
    });
  }

  // toggle guest property
  const toggleGuestProperty = (property, id) => {
    updateGuest(id, updatedGuest => {
      updatedGuest[property] = !updatedGuest[property];
    });
  }

  // toggle confirmation
  const toggleConfirmation = id => {
    toggleGuestProperty("isConfirmed", id);
  }

  // remove guest
  const removeGuest = id => {
    setGuests(prevState => prevState.filter(guest => guest.id !== id));
  }

  // toggle edit
  const toggleEdit = id => {
    toggleGuestProperty("isEditing", id);
  }

  const setName = (name, id) => {
    updateGuest(id, updatedGuest => {
      updatedGuest.name = name;
    });
  }

  const toggleFilter = () => {
    setIsFiltered(!isFiltered);
  }

  const updatePendingGuest = (name) => {
    setPendingGuest(name);
  }

  const addNewGuest = () => {
    const id = newGuestId();

    setGuests(prevState => {
      const newGuest = { 
        name: pendingGuest,
        isConfirmed: false,
        isEditing: false,
        id
      };
    
      return [newGuest, ...prevState];
    });

    setPendingGuest("");
  }

  const getTotalInvited = () => guests.length;
  const getAttendingGuests = () => guests.filter(guest => guest.isConfirmed).length;
  const unconfirmedGuests = getTotalInvited() - getAttendingGuests();
  
  return (
    <RsvpContext.Provider value={{
      guests,
      pendingGuest,
      isFiltered,
      unconfirmedGuests,
      totalInvited: getTotalInvited(),
      attendingGuests: getAttendingGuests(),
      actions: {
        toggleConfirmation,
        removeGuest,
        toggleEdit,
        setName,
        toggleFilter,
        addNewGuest,
        handleNameInput: updatePendingGuest
      }
    }}>
      { props.children }
    </RsvpContext.Provider>
  )
}