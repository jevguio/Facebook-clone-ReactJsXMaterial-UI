import React from "react";
import VideoPost from '../mini_components/VideoPost';
import { Box, Typography, useMediaQuery } from "@mui/material";
import ProfileImg from '../../assets/profile/jev.jpg'
import CsC_ProfileImg from '../../assets/profile/cec.jpg'
import gdsc from '../../assets/profile/gdsc.jpg' 



export default function App() {

    const small = useMediaQuery('(max-width:900px)');
    const dataFriend = [
        {
            title: 'GDSC Infosession',
            author: 'GDSC CeC',
            content: 'GDSC Infosession Event Hightlights',
            date: 'October 24, 2023',
            live: false,
            image: gdsc,
            youtube:<iframe  style={{width:'100%',aspectRatio:'16/9'}} src="https://www.youtube.com/embed/aflzchCP8Yk" title="Lapu-Lapu Machete and Shield Cinematic Clip Short Animation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
            video:'',
            thumb: ProfileImg,
            viewers: '25.1k',
            react: '2.2k',
            share: '1.4k',
            comment: '964'
        },  {
            title: 'Computer Studies Intro Logo',
            author: 'Computer Studies',
            content: 'Computer Studies Intro Logo Animation 3D',
            date: 'Nov 12, 2023',
            live: false,
            image: CsC_ProfileImg,
            youtube:<iframe  style={{width:'100%',aspectRatio:'16/9'}} src="https://www.youtube.com/embed/wfNkEZ12CpE" title="Lapu-Lapu Cinematic  3D animation Short Clip" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
            video:'',
            thumb: ProfileImg,
            viewers: '142.5k',
            react: '44.2k',
            share: '4.7k',
            comment: '1.5k'
        },  {
            title: 'Hutao Animation BTS',
            author: 'Wael He',
            content: 'Blender 3D hutao genshin animation',
            date: 'April 12, 2024',
            live: false,
            image: ProfileImg,
            youtube:<iframe style={{width:'100%',aspectRatio:'16/9'}} src="https://www.youtube.com/embed/wfNkEZ12CpE" title="Lapu-Lapu Cinematic  3D animation Short Clip" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
            video:'',
            thumb: ProfileImg,
            viewers: '2.1m',
            react: '194.2k',
            share: '101.5k',
            comment: '99.5k'
        },
    ]
    return (
        <>

            <Box component='div' width={small?'100%':'60%'}>

                <Typography variant='h4' sx={{ padding: '15px' }}>Videos You May Like</Typography>
                {dataFriend.map((data, index) => (

                    <VideoPost key={index} post={data}></VideoPost>
                ))}

            </Box>
        </>
    );
}