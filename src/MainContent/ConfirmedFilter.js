import React from 'react';
import { Consumer } from '../context';

const ConfirmedFilter = () => (
  <Consumer>
    {({ isFiltered, actions }) => (
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
    )}
  </Consumer>
);

export default ConfirmedFilter;