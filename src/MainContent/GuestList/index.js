import React from 'react';
import { Consumer } from '../../context';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = () => (
  <Consumer>
    {({ guests, isFiltered }) => (
      <ul>
        <PendingGuest />
        {guests
          .filter(guest => !isFiltered || guest.isConfirmed)
          .map((guest, index) => (
            <Guest 
              {...guest} 
              key={index} 
            />
        ))}
        </ul>
    )}  
  </Consumer>
)

export default GuestList;