// ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Icon, ListItemIcon, MenuItem, Typography } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (

    <MenuItem onClick={toggleTheme}>

      <Typography>
        
      <ListItemIcon>
          {mode === 'dark' ? <Brightness7  fontSize="small"/> : <Brightness4  fontSize="small" />}
        </ListItemIcon>
        {mode + ' Mode'}
      </Typography>

    </MenuItem>
  );
};

export default ThemeToggle;
