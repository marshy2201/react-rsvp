import React from 'react';
import { Consumer } from '../context';

const Counter = () => (
  <Consumer>
    {({ attendingGuests, unconfirmedGuests, totalInvited }) => (
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
    )} 
  </Consumer>
)

export default Counter;