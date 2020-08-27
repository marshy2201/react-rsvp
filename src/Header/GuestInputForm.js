import React from 'react';
import { Consumer } from '../context';

const GuestInputForm = () => (
  <Consumer>
    {({ pendingGuest, actions }) => {
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
    }}
  </Consumer>
)

export default GuestInputForm;