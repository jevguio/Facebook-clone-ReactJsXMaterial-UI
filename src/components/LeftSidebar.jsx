// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Group, Storefront, VideoLibrary } from '@mui/icons-material';
import Footer from './footer';
const Sidebar = ({ tab, setTab }) => {
  const onTabClick = (val) => {
    setTab(val);
  }
  return (
    <Box sx={{ width: '20%' ,position:'fixed',left:'0'}}>
      <List sx={{height:'100%'}}>
        <ListItem button onClick={() => onTabClick('Home')}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => onTabClick('Friends')}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItem>
        <ListItem button onClick={() => onTabClick('Marketplace')}>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItem>
        <ListItem button onClick={() => onTabClick('Watch')}>
          <ListItemIcon>
            <VideoLibrary />
          </ListItemIcon>
          <ListItemText primary="Watch" />
        </ListItem>  
      </List>
    </Box>
  );
};

export default Sidebar;
