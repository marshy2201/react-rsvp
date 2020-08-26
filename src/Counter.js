import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ totalInvited, attendingGuests, unconfirmedGuests }) => (
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

Counter.propTypes = {
  totalInvited: PropTypes.number.isRequired,
  attendingGuests: PropTypes.number.isRequired,
  unconfirmedGuests: PropTypes.number.isRequired
}

export default Counter;