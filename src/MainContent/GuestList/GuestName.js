import React, { useContext } from 'react';
import { RsvpContext } from '../../context';
import PropTypes from 'prop-types';

const GuestName = ({ id, isEditing, children }) => {
  const { actions } = useContext(RsvpContext);

  if (isEditing) {
    return (
      <input 
        type="text" 
        value={children} 
        onChange={e => actions.setName(e.target.value, id)} 
      />
    )
  }

  return <span>{children}</span>
}

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

export default GuestName;