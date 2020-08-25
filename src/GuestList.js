import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

const GuestList = ({ guests, toggleConfirmationAt }) => (
  <ul>
    {guests.map((guest, index) => (
      <Guest 
        {...guest} 
        key={index} 
        handleConfirmation={() => toggleConfirmationAt(index)}
      />
    ))}
  </ul>
)

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired
}

export default GuestList;