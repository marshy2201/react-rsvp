import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

const GuestName = ({ isEditing, id, children }) => (
  <Consumer>
    {({ actions }) => {
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
    }}
  </Consumer>
)

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
}

export default GuestName;