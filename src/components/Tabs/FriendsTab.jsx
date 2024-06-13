import React from "react";
import Box_friend_profile from '../mini_components/box_friend_profile';
import { Box, ImageList, Typography, useMediaQuery } from "@mui/material";
import ProfileImg from '../../assets/profile/jev.jpg'  
 
export default function App() {
    
  const isRightScreen = useMediaQuery('(max-width:1200px)');
    const dataFriend = [
        {
            name: 'Computer Studies',
            img: ProfileImg,
            mutual: 5
        }, {
            name: 'Jev Guio',
            img: ProfileImg,
            mutual: 5
        }, {
            name: 'John Gyuo',
            img: ProfileImg,
            mutual: 5
        }, {
            name: 'Waka Ehla',
            img: ProfileImg,
            mutual: 5
        }, {
            name: 'Hello World',
            img: ProfileImg,
            mutual: 5
        },
    ]
    return (
        <>

            <Box component='div'  sx={{ marginLeft:isRightScreen?'auto':'0',marginRight:isRightScreen?'auto':'0',marginTop:isRightScreen?'5%':'0'}}>

                <Typography variant='h4' sx={{ padding: '15px' }}>Friend Request</Typography>
                <ImageList  sx={{ width:'100%',marginLeft:isRightScreen?'auto':'0',marginRight:isRightScreen?'auto':'0'}} cols={isRightScreen?2:3} rowHeight={164}>
                    {dataFriend.map((data, index) => (

                        <Box_friend_profile key={index} dataFriend={data}></Box_friend_profile>
                    ))}
                </ImageList >

            </Box>
        </>
    );
}