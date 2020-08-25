import React from 'react';
import PropTypes from 'prop-types';

const GuestName = ({ isEditing, children }) => {
  if (isEditing) {
    return (
      <input type="text" value={children} />
    )
  }

  return <span>{children}</span>
}

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired
}

export default GuestName;