import React from 'react';
import { Consumer } from '../../context';

const PendingGuest = () => (
  <Consumer>
    {({ pendingGuest }) => {
      if (pendingGuest) {
        return (
          <li className="pending">
            <span>{pendingGuest}</span>
          </li>
        );
      }
    
      return null;
    }}
  </Consumer>
)

export default PendingGuest;