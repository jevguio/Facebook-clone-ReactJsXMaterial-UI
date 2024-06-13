// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Box, Icon, SvgIcon, Button, Tooltip, useMediaQuery } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Profile_menu from './mini_components/profile_menu';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
const Header = ({ tab, setTab }) => {

  const portrait = useMediaQuery('(max-width:900px)');
  const onTabClick = (val) => {
    setTab(val);
  }
  const Home = () => {
    window.location = '/dashboard';
  }
  return (
    <AppBar sx={{ width: '100%'}}>
      <Toolbar sx={{ display: 'flex', margin: '-5px', marginLeft: '-25px' }}>
        <IconButton onClick={Home} sx={{ padding: '5px' ,marginLeft:'5px'}}>

          <FacebookRoundedIcon color='primary' sx={{ fontSize: '40px', textAlign: 'left'}}></FacebookRoundedIcon>
        </IconButton>
        <Box sx={{ display: portrait ? 'none' : 'flex', position: 'relative', borderRadius: '20px',  marginLeft: 0, width: '20%' }}>

          <Search sx={{   textAlign: 'center', margin: '6px' }} />
          <InputBase
            placeholder="Search Facebook"
            inputProps={{ 'aria-label': 'search' }}
            style={{ paddingLeft: '10px', width: '100%' }}
          />
        </Box>
        <Box sx={{
          flexGrow: 1, display: 'flex', justifyContent: 'center',
          alignItems: 'center', width: '60%'
        }} >
          {/* Home */}
          <Tooltip title="Home">
            <IconButton onClick={() => onTabClick('Home')} variant="text" sx={{ color: tab === 'Home' ? '#316FF6' : 'gray', width: '15%', borderRadius: 0 }}>
              <HomeRoundedIcon></HomeRoundedIcon>
            </IconButton>
          </Tooltip>

          {/* Friends */}
          <Tooltip title="Friends">
            <IconButton onClick={() => onTabClick('Friends')} variant="text" sx={{ color: tab === 'Friends' ? '#316FF6' : 'gray', width: '15%', borderRadius: 0 }}>
              <PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>
            </IconButton>
          </Tooltip>
          {/* Watch */}
          <Tooltip title="Watch">
            <IconButton onClick={() => onTabClick('Watch')} variant="text" sx={{ color: tab === 'Watch' ? '#316FF6' : 'gray', width: '15%', borderRadius: 0 }}>
              <OndemandVideoRoundedIcon></OndemandVideoRoundedIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="Marketplace">
            <IconButton onClick={() => onTabClick('Marketplace')} variant="text" sx={{ color: tab === 'Marketplace' ? '#316FF6' : 'gray', width: '15%', borderRadius: 0 }}>
              <StorefrontOutlinedIcon></StorefrontOutlinedIcon>
            </IconButton>
          </Tooltip>

          <Tooltip title="Game">
            <IconButton onClick={() => onTabClick('Game')} variant="text" sx={{ color: tab === 'Game' ? '#316FF6' : 'gray', width: '15%', borderRadius: 0 }}>
              <VideogameAssetOutlinedIcon></VideogameAssetOutlinedIcon>
            </IconButton>
          </Tooltip>

        </Box>
        <Box component="div" sx={{ width: portrait?'10%':'25%', textAlign: 'right' }}>
          <Box sx={{ display: portrait ? 'none' : 'inline' ,width:'70%' }}>
            <Tooltip title="Chat" >
              <IconButton color="inherit" sx={{ color: 'gray' }}>
                <ChatBubbleIcon />
              </IconButton>

            </Tooltip>
            <Tooltip title="Notification" >
              <IconButton color="inherit" sx={{ color: 'gray' }}>
                <Notifications />
              </IconButton>
            </Tooltip>

          </Box>
          <Profile_menu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
