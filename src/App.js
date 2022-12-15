import React, { useState } from 'react';
import ThemeButton from './components/ThemeButton';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App app-${theme}`}>
      <ThemeButton theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
