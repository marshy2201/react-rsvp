import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

const GuestList = ({ guests, toggleConfirmationAt, toggleEditAt, setNameAt, isFiltered }) => (
  <ul>
    {guests
      .filter(guest => !isFiltered || guest.isConfirmed)
      .map((guest, index) => (
        <Guest 
          {...guest} 
          key={index} 
          handleConfirmation={() => toggleConfirmationAt(index)}
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
  isFiltered: PropTypes.bool.isRequired
}

export default GuestList;