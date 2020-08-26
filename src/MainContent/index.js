import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = ({
  guests,
  toggleConfirmation,
  removeGuest,
  toggleEdit,
  setName,
  isFiltered,
  pendingGuest,
  unconfirmedGuests,
  totalInvited,
  attendingGuests,
  toggleFilter
}) => (
  <div className="main">
    <ConfirmedFilter 
      isFiltered={isFiltered} 
      toggleFilter={toggleFilter} 
    />
    <Counter 
      totalInvited={totalInvited}
      attendingGuests={attendingGuests}
      unconfirmedGuests={unconfirmedGuests}
    />
    <GuestList 
      guests={guests}
      toggleConfirmation={toggleConfirmation} 
      removeGuest={removeGuest}
      toggleEdit={toggleEdit}
      setName={setName}
      isFiltered={isFiltered}
      pendingGuest={pendingGuest}
    />
  </div>
)

MainContent.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  unconfirmedGuests: PropTypes.number.isRequired,
  totalInvited: PropTypes.number,
  attendingGuests: PropTypes.number.isRequired,
  toggleFilter: PropTypes.func.isRequired
}

export default MainContent;