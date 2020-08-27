import React, { useContext } from 'react';
import { RsvpContext } from '../../context';

const PendingGuest = () => {
  const { pendingGuest: name } = useContext(RsvpContext);

  if (name) {
    return (
      <li className="pending">
        <span>{name}</span>
      </li>
    );
  }

  return null;
}

export default PendingGuest;