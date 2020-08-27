import React, { useContext } from 'react';
import { RsvpContext } from '../context';

const Counter = () => {
  const { 
    totalInvited, 
    attendingGuests, 
    unconfirmedGuests 
  } = useContext(RsvpContext);

  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{ attendingGuests }</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{ unconfirmedGuests }</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{ totalInvited }</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Counter;