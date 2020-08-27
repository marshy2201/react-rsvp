import React from 'react';

import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = () => (
  <div className="main">
    <ConfirmedFilter />
    <Counter />
    <GuestList />
  </div>
)

export default MainContent;