import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = ({ name, isConfirmed, isEditing, handleConfirmation, handleRemove, handleEdit, setName }) => (
  <li>
    <GuestName 
      isEditing={isEditing}
      handleNameEdits={e => setName(e.target.value)}
    >
      {name}
    </GuestName>
    <label>
      <input 
        type="checkbox" 
        checked={isConfirmed} 
        onChange={handleConfirmation} 
      /> Confirmed
    </label>
    <button onClick={handleEdit}>{isEditing ? "save" : "edit"}</button>
    <button onClick={handleRemove}>remove</button>
  </li>
)

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Guest;