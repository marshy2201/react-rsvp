import React, { Component } from 'react';
import GuestList from './GuestList';

class App extends Component {
  state = {
    guests: [
      {
        name: "Lewis",
        isConfirmed: false
      },
      {
        name: "Megan",
        isConfirmed: true
      },
      {
        name: "Duke",
        isConfirmed: false
      }
    ]
  }

  toggleConfirmationAt = indexToChange => {
    this.setState(prevState => {
      const updatedGuests = [...prevState.guests];
      const updatedGuest = { ...updatedGuests[indexToChange] };

      updatedGuest.isConfirmed = !updatedGuest.isConfirmed;
      updatedGuests[indexToChange] = updatedGuest;
      
      return { guests: updatedGuests };
    });
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.filter(guest => guest.isConfirmed).length;
  getUnconfirmedGuests = () => this.state.guests.filter(guest => !guest.isConfirmed).length;

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList 
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt} 
          />
        </div>
      </div>
    );
  }
}

export default App;
