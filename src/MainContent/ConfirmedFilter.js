import React, { useContext } from 'react';
import { RsvpContext } from '../context';

const ConfirmedFilter = () => {
  const { isFiltered, actions } = useContext(RsvpContext);

  return (
    <div>
      <h2>Invitees</h2>
      <label>
        <input 
          type="checkbox" 
          checked={isFiltered}
          onChange={actions.toggleFilter} 
        /> Hide those who haven't responded
      </label>
    </div>
  )
}

export default ConfirmedFilter;