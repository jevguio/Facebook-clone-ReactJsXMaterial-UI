import React from "react";
import MarketPlace_Box from '../mini_components/MarketPlace_Box';
import { Box, ImageList, Typography, useMediaQuery } from "@mui/material";
import ProfileImg from '../../assets/profile/jev.jpg'

import anime from '../../assets/profile/anime.webp' 
export default function App() {
    
  const isRightScreen = useMediaQuery('(max-width:1200px)');
    const dataFriend = [
        {
            name: 'San Guko',
            img: anime,
            price: 120,
            description:'Wfege '
        }, {
            name: 'Anime',
            img: anime,
            price: 5221,
            description:'helloo '
        }, {
            name: 'Susss',
            img: ProfileImg,
            price: 1425,
            description:'Wfege '
        }, {
            name: 'San eas',
            img: anime,
            price: 3262,
            description:'example '
        }, {
            name: 'wgae aebrs',
            img: ProfileImg,
            price: 125662,
            description:'awgsrh '
        },
    ]
    return (
        <>

            <Box component='div' >

                <Typography variant='h4' sx={{ padding: '15px' }}>Today's picks</Typography>
                <ImageList  sx={{ width:'100%'}} cols={isRightScreen?2:3} rowHeight={164}>
                    {dataFriend.map((data, index) => (

                        <MarketPlace_Box key={index} dataFriend={data}></MarketPlace_Box>
                    ))}
                </ImageList >

            </Box>
        </>
    );
}