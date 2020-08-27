import React from 'react';
import { Consumer } from '../../context';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = ({ name, isConfirmed, isEditing, id }) => (
  <Consumer>
    {({ actions }) => (
      <li>
        <GuestName id={id} isEditing={isEditing}>
          {name}
        </GuestName>
        <label>
          <input 
            type="checkbox" 
            checked={isConfirmed} 
            onChange={() => actions.handleConfirmation(id)} 
          /> Confirmed
        </label>
        <button onClick={() => actions.handleEdit(id)}>{isEditing ? "save" : "edit"}</button>
        <button onClick={() => actions.handleRemove(id)}>remove</button>
      </li>
    )}
  </Consumer>
)

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

export default Guest;