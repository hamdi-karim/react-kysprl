import React, { useState } from 'react';

import Sidebar from '../components/Sidebar';
import MainChatWindow from '../components/MainChatWindow';

const Homepage = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <MainChatWindow />
      </div>
    </div>
  );
};

export default Homepage;
