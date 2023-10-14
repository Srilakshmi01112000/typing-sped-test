import React from 'react';

function TypingBox({ words, userInput, onInputChange }) {
  return (
    <div>
      <div>
        <p>{words}</p>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

export default TypingBox;
