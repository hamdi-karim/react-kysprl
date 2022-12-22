import React, { useState } from 'react';

const Connect = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Golang Chat</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Username" />
          <button>Connect</button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
