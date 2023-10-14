import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [selectedTheme, setSelectedTheme] = useState('default'); // Default theme class

  const themeOptions = [
    { label: 'Darken Black', value: 'dark-theme' },
    { label: 'Coloured Pink', value: 'pink-theme' },
    { label: 'Coloured Grey', value: 'grey-theme' },
    { label: 'Coloured Black', value: 'black-theme' },
    { label: 'Coloured Blue', value: 'blue-theme' },
    { label: 'Coloured Green', value: 'green-theme' },
    { label: 'Lighten White', value: 'white-theme' },
    { label: 'Lighten Purple', value: 'purple-theme' },
  ];

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <div className="theme-switcher">
      <label htmlFor="theme-select">Select Theme:</label>
      <select id="theme-select" value={selectedTheme} onChange={handleThemeChange}>
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
