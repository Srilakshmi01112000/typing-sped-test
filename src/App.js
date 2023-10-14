import React, { useState } from 'react';
import TypingBox from './components/TypingBox';
import ThemeSwitcher from './ThemeSwitcher'; // Import your ThemeSwitcher component
import MyComponent from './MyComponent'; // Import a component that uses the selected theme


function App() {
  const [userInput, setUserInput] = useState('');
  const wordsToType = 'Typing is a fundamental skill in todays digital age. Whether its composing emails, writing documents, or chatting with friends, the ability to type efficiently is invaluable. With practice, anyone can become a proficient typist. Its about more than just hitting the keys accurately; its also about speed and comfort. Typing quickly and comfortably allows you to focus on what youre expressing rather than the mechanics of typing. Moreover, it can boost your productivity. Many tasks, both personal and professional, benefit from fast, accurate typing. As you explore the world of typing, youll find various techniques, keyboard layouts, and tools to help you become a better typist. Typing is a skill that will serve you well in many aspects of your life.';
  const [selectedTheme, setSelectedTheme] = useState('default');
  const handleInputChange = (input) => {
    setUserInput(input);
  };
  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };
  return (
    <div className="App">
      <h1>Typing Speed Test</h1>
      <TypingBox
        words={wordsToType}
        userInput={userInput}np
        onInputChange={handleInputChange}
      />
      <div className={`app ${selectedTheme}`}>
        <ThemeSwitcher onThemeChange={handleThemeChange} />
        <MyComponent selectedTheme={selectedTheme} />
      </div>
    </div>
  );
}

export default App;