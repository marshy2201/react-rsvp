import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

const GuestList = ({ guests }) => (
  <ul>
    {guests.map((guest, index) => (
      <Guest 
        {...guest} 
        key={index} 
      />
    ))}
  </ul>
)

GuestList.propTypes = {
  guests: PropTypes.array.isRequired
}

export default GuestList;