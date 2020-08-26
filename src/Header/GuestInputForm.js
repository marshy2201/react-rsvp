import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = ({ handleNameInput, addNewGuest, pendingGuest }) => {
  const newGuestSubmitHandler = e => {
    e.preventDefault();
    addNewGuest();
  }

  return (
    <form onSubmit={newGuestSubmitHandler}>
      <input 
        type="text" 
        placeholder="Invite Someone" 
        value={pendingGuest}
        onChange={handleNameInput} 
      />
      <button type="submit" name="submit" value="submit">Submit</button>
    </form>
  )
}

GuestInputForm.propTypes = {
  handleNameInput: PropTypes.func.isRequired,
  addNewGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestInputForm;