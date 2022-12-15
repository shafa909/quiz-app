import React, { useState } from 'react';
import ThemeButton from './components/ThemeButton';
import QuizBoard from './components/QuizBoard';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App app-${theme}`}>
      <ThemeButton theme={theme} setTheme={setTheme} />
      <QuizBoard theme={theme} />
    </div>
  );
};

export default App;
