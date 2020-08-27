import React, { useContext } from 'react';
import { RsvpContext } from '../../context';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = () => {
  const { guests, isFiltered } = useContext(RsvpContext);

  return (
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
  )
}

export default GuestList;