import React from 'react';
import PropType from 'prop-types';

const Guest = ({ name, isConfirmed }) => (
  <li>
    <span>{name}</span>
    <label>
      <input type="checkbox" checked={isConfirmed} /> Confirmed
    </label>
    <button>edit</button>
    <button>remove</button>
  </li>
)

Guest.propTypes = {
  name: PropType.string.isRequired,
  isConfirmed: PropType.bool.isRequired
}

export default Guest;