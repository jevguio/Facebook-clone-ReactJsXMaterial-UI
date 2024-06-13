import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function App({ dataFriend }) {
    return (
        <Box sx={{border:'none',cursor:'pointer', minWidth: '150px', padding: '0', margin: '5px', borderRadius: '15px', boxShadow: 'black 0 0 10px -5px' }}>
            <Card sx={{ padding: 0, margin: 0}}>
                <CardContent sx={{ padding: 0, margin: 0 ,textAlign:'center'}} >
                    <Box component='img' src={dataFriend.img} sx={{ minWidth: '150px',width:'100%', margin: 0, padding: 0, aspectRatio: '1/1', objectFit: 'cover' }}></Box>
                    <Typography sx={{ paddingLeft: '15px', textAlign: 'left', fontSize: 'large', fontWeight: 'bold' }}>{dataFriend.name}</Typography>
                    <Typography color='gray' sx={{ paddingLeft: '15px', textAlign: 'left', fontSize: 'medium'}}>${dataFriend.price&dataFriend.price}</Typography>
                     
                </CardContent>
            </Card>
        </Box>
    );
}