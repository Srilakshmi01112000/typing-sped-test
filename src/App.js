import React, { useState } from 'react';
import TypingBox from './components/TypingBox';

function App() {
    const [userInput, setUserInput] = useState('');
    const wordsToType = 'Hello, this is a typing test.';
  
    const handleInputChange = (input) => {
      setUserInput(input);
    };
  
    return (
      <div className="App">
        <h1>Typing Speed Test</h1>
        <TypingBox
          words={wordsToType}
          userInput={userInput}
          onInputChange={handleInputChange}
        />
        {/* Other components and buttons */}
      </div>
    );
  }

  export default App;