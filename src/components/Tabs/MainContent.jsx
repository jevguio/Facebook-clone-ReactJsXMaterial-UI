// src/components/MainContent.js
import React, { useEffect } from 'react';
import Post from '../mini_components/Post';
import Wael from '../../assets/profile/jev.jpg';
import AnimeProf from '../../assets/profile/anime.webp';  
const samplePost = [{
  author: 'John Gyu',
  date: 'May 15, 2024',
  content: 'Hola amigas',
  image: AnimeProf,
  video: '',
  profile: AnimeProf,
  likes:'6.1m',
  comments:'16.3m',
  share:'5.41m'
},
{
  author: 'John Gyu',
  date: 'April 15, 2024',
  content: 'Wazzapp!',
  image: Wael,
  profile: AnimeProf,
  video: '',
  likes:'16.3m',
  comments:'1.3m',
  share:'3.21m'
},
{
  author: 'Naruto Wael',
  date: 'June 21, 2024',
  content: 'saminamina eh eh waka waka ey eh.',
  image: '',
  video: '',
  profile: Wael,
  likes:'2.4m',
  comments:'200.2k',
  share:'124k'
},
{
  author: 'Naruto Wael',
  date: 'May 15, 2024',
  content: 'Hutao Animation',
  image: '',
  video: '',
  youtube:<iframe style={{width:'100%',aspectRatio:'16/9'}} src="https://www.youtube.com/embed/wfNkEZ12CpE" title="Lapu-Lapu Cinematic  3D animation Short Clip" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
  profile: Wael,
  likes:'4.2m',
  comments:'210.2k',
  share:'324k'
}
];

const MainContent = ({setPost}) => {
  
  return (
    <div style={{ padding: '20px', minWidth:'350px', maxWidth:'550px', width:'100%', marginLeft:'auto',marginRight:"auto"}}>
      <h1>News Feed</h1>
      {samplePost.map((post,index)=>(
        <Post key={index} post={post} setPost={setPost}/>
      ))}
      {/* You can map over an array of posts and render <Post /> components */}
    </div>
  );
};

export default MainContent;
