
import React from 'react';

import { styled } from '@mui/material/styles';
import { Box, Typography, Avatar, Badge } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  
export default function Mini_profile({ data }) {

    return (
        <Box sx={{ display: 'flex', padding: '0', margin: '0', width: '100%' }}>
<StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src={"./"+data.src} />
</StyledBadge>
            <Typography sx={{textAlign:'center',alignContent:'center',paddingLeft:'5px',fontWeight:'bold'}}>{data.fname}</Typography>
        </Box>
    );
}