import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = ({ 
  guests, 
  toggleConfirmationAt, 
  removeGuestAt, 
  toggleEditAt, 
  setNameAt, 
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
          handleConfirmation={() => toggleConfirmationAt(index)}
          handleRemove={() => removeGuestAt(index)}
          handleEdit={() => toggleEditAt(index)}
          setName={text => setNameAt(text, index)}
        />
    ))}
  </ul>
)

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestList;