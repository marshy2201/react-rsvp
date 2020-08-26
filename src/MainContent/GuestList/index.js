import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = ({ 
  guests, 
  toggleConfirmation, 
  removeGuest, 
  toggleEdit, 
  setName, 
  isFiltered,
  pendingGuest 
}) => (
  <ul>
    <PendingGuest name={pendingGuest} />
    {guests
      .filter(guest => !isFiltered || guest.isConfirmed)
      .map((guest, index) => (
        <Guest 
          {...guest} 
          key={index} 
          handleConfirmation={() => toggleConfirmation(guest.id)}
          handleRemove={() => removeGuest(guest.id)}
          handleEdit={() => toggleEdit(guest.id)}
          setName={text => setName(text, guest.id)}
        />
    ))}
  </ul>
)

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestList;