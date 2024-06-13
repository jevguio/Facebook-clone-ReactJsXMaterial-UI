import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
export default function App({ dataFriend }) {
    return (
        <Box sx={{minWidth:'200px', maxWidth: '400px', padding: '0', margin: '10px', borderRadius: '15px', boxShadow: 'black 0 0 10px -5px' }}>
            <Card sx={{ padding: 0, margin: 0 }}>
                <CardContent sx={{ padding: 0, margin: 0, textAlign: 'center' }} >
                    <Box component='img' src={"./"+dataFriend.img} sx={{ minWidth:'200px',width:'100%',maxWidth: '400px', margin: 0, padding: 0, aspectRatio: '2/1', objectFit: 'cover' }}></Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{paddingLeft:'10px',paddingTop:'10px',}}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src={"./"+dataFriend.author} />
                            </StyledBadge>
                        </Box>
                        <Box sx={{paddingTop:'5px'}}>
                            <Typography sx={{ paddingLeft: '15px', textAlign: 'left', fontSize: 'large', fontWeight: 'bold' }}>
                                {dataFriend.title}
                            </Typography>

                            <Typography color='gray' sx={{ paddingLeft: '15px', textAlign: 'left', fontSize: 'medium' }}>
                            {dataFriend.name+' '
                                }- {dataFriend.description
                                }
                            </Typography>
                        </Box>
                    </Box>


                </CardContent>
            </Card>
        </Box>
    );
}