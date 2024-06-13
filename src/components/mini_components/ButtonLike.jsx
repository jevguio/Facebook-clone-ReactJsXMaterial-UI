import React, { useState } from 'react';
import { Button, IconButton, Popover } from '@mui/material';
import { styled } from '@mui/system';
import { EmojiEmotions } from '@mui/icons-material';
import Emojie from './Emoji';
const LikeButton = styled(IconButton)(({ theme }) => ({
  textTransform: 'none',
  color: '#606770',
  backgroundColor: 'transparent',
  borderRadius: 0,
  width: '30%',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#1877f2',
  },
  '&.liked': {
    color: '#1877f2',
  },
}));

const FacebookLikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [eh, setEh] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    setAnchorEl(null); // Close popover on like button click
  };
  const closeLike=()=>{
    setEh(true);
    setAnchorEl(null);
  }
  const hoverLike=(event)=>{
    if(!eh){
      
    setAnchorEl(event.currentTarget)
    }
    
    setEh(false);
  }
  return (
    <div sx={{borderRadius:0,width:'50%',display:'block'}}>
      <IconButton
      sx={{borderRadius:0,width:'100%'}} 
        color="primary"
        onClick={handleLike}

  onMouseEnter={hoverLike}
  
  onMouseLeave={closeLike}
        disabled={anchorEl}
      >
      <Emojie icon='Like' color='#1877F2' rount='0' width='30%'></Emojie> 
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Button variant="text" color="primary">
            <EmojiEmotions /> Like
          </Button>
          <Button variant="text" color="primary">
            <EmojiEmotions /> Love
          </Button>
          {/* Add more emoji buttons as needed */}
        </div>
      </Popover>
    </div>
  );
};
export default FacebookLikeButton;
