import React, { useState } from 'react';

const InputMessage = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type message" />
      <button>Send</button>
    </div>
  );
};

export default InputMessage;
