import React, { useState } from 'react';

const Message = ({ owner }) => {
  // add condition to classname to distinguish own messages.
  return (
    <div className={owner ? 'message owner' : 'message'}>
      <div className="messageContent">
        {owner ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Me: </span> <p>Hello Owner</p>
          </div>
        ) : (
          <p>Hello</p>
        )}
      </div>
    </div>
  );
};

export default Message;
