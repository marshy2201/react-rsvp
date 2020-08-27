import React, { useContext } from 'react';
import { RsvpContext } from '../context'

const GuestInputForm = () => {
  const { pendingGuest, actions } = useContext(RsvpContext);

  const newGuestSubmitHandler = e => {
    e.preventDefault();
    actions.addNewGuest();
  }

  return (
    <form onSubmit={newGuestSubmitHandler}>
      <input 
        type="text" 
        placeholder="Invite Someone" 
        value={pendingGuest}
        onChange={e => actions.handleNameInput(e.target.value)} 
      />
      <button type="submit" name="submit" value="submit">Submit</button>
    </form>
  )
}

export default GuestInputForm;