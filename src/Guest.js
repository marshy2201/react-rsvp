import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = ({ name, isConfirmed, isEditing, handleConfirmation, handleEdit }) => (
  <li>
    <GuestName isEditing={isEditing}>{name}</GuestName>
    <label>
      <input 
        type="checkbox" 
        checked={isConfirmed} 
        onChange={handleConfirmation} 
      /> Confirmed
    </label>
    <button onClick={handleEdit}>edit</button>
    <button>remove</button>
  </li>
)

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}

export default Guest;