// src/components/Sidebar.js
import React from 'react';
import { Box, Button, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, Group, Storefront, VideoLibrary } from '@mui/icons-material';
import Mini_profile from './mini_components/mini_profile';
import animeImg from '../assets/profile/anime.webp';
import jev from '../assets/profile/jev.jpg';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
const friendList=[
  {
    fname:'Jev Guio',
    src:jev
},  {
  fname:'John Gyu',
  src:animeImg
},  {
  fname:'Naruto Wael',
  src:jev
},  {
  fname:'Hala Kadiha',
  src:animeImg
}
]
const Sidebar = () => {
  return (
    <>
    
    <Box sx={{ width: '20%' ,position:'fixed',right:'0'}}>
      
      <Box sx={{display:'flex'}}>
        
      <Typography color="text.secondary" sx={{fontWeight:'bold',marginTop:'5%',width:'100%'}}>Contacts</Typography>
      <IconButton >
        <SearchRoundedIcon></SearchRoundedIcon>
      </IconButton >
      <IconButton >
        <MoreHorizRoundedIcon></MoreHorizRoundedIcon>
      </IconButton >
      </Box>
      
      <Divider variant="middle" />
      <List>
        {friendList.map((fl,index)=>
        <ListItem button key={index} sx={{padding:'5px',margin:'0',width:'100%'}}>
        <ListItemIcon>
          <Mini_profile data={fl}/>
        </ListItemIcon> 
      </ListItem>
        )}
      </List>
    </Box>
    
    <IconButton sx={{position:'fixed',top:'90%',right:'2%',backgroundColor:'#616161',color:'white'}}>
      <DriveFileRenameOutlineOutlinedIcon sx={{fontSize:'30px'}}></DriveFileRenameOutlineOutlinedIcon>
      </IconButton>
    </>
  );
};

export default Sidebar;
