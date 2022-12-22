import React, { useState } from 'react';
import '../style.scss';

import ChatList from './ChatList';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ChatList />
    </div>
  );
};

export default Sidebar;
