// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Group, Storefront, VideoLibrary, StorefrontOutlined } from '@mui/icons-material';
import Footer from './footer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import InboxIcon from '@mui/icons-material/Inbox';
import SellIcon from '@mui/icons-material/Sell';
const Sidebar = ({ tab, setTab }) => {
  const onTabClick = (val) => {
    setTab(val);
  }
  return (
    <Box sx={{ width: '20%' ,position:'fixed',left:'0'}}>
      <List>
        <ListItem button onClick={() => onTabClick('Home')}>
          <ListItemIcon>
            <StorefrontOutlined />
          </ListItemIcon>
          <ListItemText primary="Browse All" />
        </ListItem>
        <ListItem button onClick={() => onTabClick('Friends')}>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
        <ListItem button onClick={() => onTabClick('Marketplace')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => onTabClick('Buying')}>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Buying" />
        </ListItem> 
        <ListItem button onClick={() => onTabClick('Selling')}>
          <ListItemIcon>
            <SellIcon />
          </ListItemIcon>
          <ListItemText primary="Selling" />
        </ListItem> 
      </List>
    </Box>
  );
};

export default Sidebar;
