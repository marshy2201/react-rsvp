import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = ({
  guests,
  toggleConfirmationAt,
  removeGuestAt,
  toggleEditAt,
  setNameAt,
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
      toggleConfirmationAt={toggleConfirmationAt} 
      removeGuestAt={removeGuestAt}
      toggleEditAt={toggleEditAt}
      setNameAt={setNameAt}
      isFiltered={isFiltered}
      pendingGuest={pendingGuest}
    />
  </div>
)

MainContent.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  toggleEditAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  unconfirmedGuests: PropTypes.number.isRequired,
  totalInvited: PropTypes.number,
  attendingGuests: PropTypes.number.isRequired,
  toggleFilter: PropTypes.func.isRequired
}

export default MainContent;