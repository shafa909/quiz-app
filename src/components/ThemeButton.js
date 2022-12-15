import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import './ThemeButton.css';

const ThemeButton = ({ theme, setTheme }) => {
  return (
    <ToggleButtonGroup
      className={`toggle-button-group  toggle-${theme}`}
      value={theme}
      color='primary'
      onChange={(e, value) => {
        setTheme(value);
      }}
      exclusive
      aria-label='Platform'
    >
      <ToggleButton className='toggle-button' value='light'>
        Light
      </ToggleButton>
      <ToggleButton className='toggle-button' value='dark'>
        Dark
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeButton;
