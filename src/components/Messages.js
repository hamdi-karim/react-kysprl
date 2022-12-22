import React, { useState } from 'react';
import '../style.scss';

import Message from './Message';
const Messages = () => {
  return (
    <div className="messages">
      <Message owner={true} />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message owner={true} />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
