import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RsvpContext } from '../../context';

import GuestName from './GuestName';

const Guest = ({ id, name, isConfirmed, isEditing }) => {
  const { actions } = useContext(RsvpContext);

  return (
    <li>
      <GuestName 
        isEditing={isEditing}
        id={id}      
      >
        {name}
      </GuestName>
      <label>
        <input 
          type="checkbox" 
          checked={isConfirmed} 
          onChange={() => actions.toggleConfirmation(id)} 
        /> Confirmed
      </label>
      <button onClick={() => actions.toggleEdit(id)}>{isEditing ? "save" : "edit"}</button>
      <button onClick={() => actions.removeGuest(id)}>remove</button>
    </li>
  )
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

export default Guest;