import React from "react";
import Video_post from '../mini_components/videogame_post';
import { Box, ImageList, Typography, useMediaQuery } from "@mui/material";
import dota2 from '../../assets/profile/dota2.png'
import dota2bg from '../../assets/profile/dota2 bg.jpg'
import genshin from '../../assets/profile/genshin.jpg'
import genshinlogo from '../../assets/profile/Genshin_Impact.webp'


  
export default function App() {

    const isRightScreen = useMediaQuery('(max-width:1200px)');
    const dataFriend = [
        {
            title: 'Dota 2 Highlights',
            name: 'Dota 2',
            description: 'Valve Corporation',
            live:false,
            author: dota2, 
            img: dota2bg, 
            viewers:'25.1k'
        }, 
        {
            title: 'Genshin Impact Highlights',
            name: 'Genshin Impact',
            description: 'Hoyoverse',
            live:false,
            author: genshinlogo, 
            img: genshin, 
            viewers:'225.1k'
        },  
        {
            title: 'Dota 2 Highlights',
            name: 'Dota 2',
            description: 'Valve Corporation',
            live:false,
            author: dota2, 
            img: dota2bg, 
            viewers:'25.1k'
        }, 
        {
            title: 'Genshin Impact Highlights',
            name: 'Genshin Impact',
            description: 'Hoyoverse',
            live:false,
            author: genshinlogo, 
            img: genshin, 
            viewers:'225.1k'
        },  
    ]
    return (
        <>

            <Box component='div' >

                <Typography variant='h4' sx={{ padding: '15px',marginTop:isRightScreen?'8%':'1%' }}>Suggested Live Now</Typography>
                <ImageList  sx={{ width:'100%'}}  cols={isRightScreen?1:2} rowHeight={164}>
                    {dataFriend.map((data, index) => (

                        <Video_post key={index} dataFriend={data}></Video_post>
                    ))}
                </ImageList >

            </Box>
        </>
    );
}