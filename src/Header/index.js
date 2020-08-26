import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = ({ pendingGuest, handleNameInput, addNewGuest }) => (
  <header>
    <h1>RSVP</h1>
    <p>A Treehouse App</p>
    <GuestInputForm 
      pendingGuest={pendingGuest}
      handleNameInput={e => handleNameInput(e.target.value)} 
      addNewGuest={addNewGuest}
    />
  </header>
)

Header.propTypes = {
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  addNewGuest: PropTypes.func.isRequired
}

export default Header; 