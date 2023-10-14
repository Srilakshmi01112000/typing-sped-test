import React from 'react';
import './styles.css'; // Import the CSS file with themes

const MyComponent = ({ selectedTheme }) => {
  return (
    <div className={`my-component ${selectedTheme}`}>
    </div>
  );
};

export default MyComponent;
