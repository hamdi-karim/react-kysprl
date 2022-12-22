import React, { useState } from 'react';
import '../style.scss';

import Messages from './Messages';
import InputMessage from './InputMessage ';

const MainChatWindow = () => {
  return (
    <div className="chatWindow">
      <Messages />
      <InputMessage />
    </div>
  );
};

export default MainChatWindow;
