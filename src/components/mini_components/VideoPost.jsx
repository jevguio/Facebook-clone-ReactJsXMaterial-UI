// src/components/Post.js
import React from 'react';
import { Divider, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Box, Button } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
const Emoj = ({ icon, color }) => {
  return (

    <IconButton sx={{
      borderRadius: '50%',
      backgroundColor: color,
      color: 'white',
      height: '25px',
      width: '25px',
      textAlign: 'center',
      marginLeft: '5px',
      marginRight: '-10px',
      marginTop: '5px',
      marginBottom: '5px'
    }}>
      {icon === 'Like' ?
        <ThumbUpRoundedIcon sx={{ fontSize: '15px' }}></ThumbUpRoundedIcon>
        : icon === 'Heart' ?
          <FavoriteRoundedIcon sx={{ fontSize: '15px' }}></FavoriteRoundedIcon>
          : icon === 'Sad' ?
            '😢'
            : icon === 'Happy' ?
            '😂'
            : icon === 'Comment' ?
            <ModeCommentIcon sx={{ fontSize: '25px' ,color:'gray'}}></ModeCommentIcon>
            : icon === 'Share' ?
            <ReplyOutlinedIcon sx={{ fontSize: '25px' ,color:'gray'}}></ReplyOutlinedIcon>
            : '🥰'
      }
    </IconButton>
  )
}
const Post = ({ post }) => {

  return (
    <Card sx={{  marginLeft: 'auto', marginRight: 'auto', marginBottom: '10%', marginTop: '10%',boxShadow:'black 0 0 3px -1px'}}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" sx={{borderWidth:'1px',borderColor:'gray',borderStyle:'solid'}} src={post.image }>{post.author[0]}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={post.author}
        subheader={post.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      {post.youtube&&post.youtube}
      {post.video && <CardMedia component="video" controls sx={{aspectRatio:'16/9'}} src={post.video} alt="Post image" />}
      <Box sx={{display:'flex',
  justifyContent: 'space-between'}}>
        
      <CardActions sx={{ display: 'flex' ,textAlign:'center'}}>
          <Emoj icon='Like' color='#1877F2'></Emoj>
          <Emoj icon='Heart' color='#df4b5f'></Emoj>
          <Emoj icon='Sad' color=''></Emoj>
          <Emoj icon='Happy' color=''></Emoj>
          <Typography sx={{ paddingLeft: '10px' }}>{post.react}</Typography>
        </CardActions>
        <CardActions sx={{ display: 'flex' ,textAlign:'right'}}>
          <Emoj icon='Comment' color=''></Emoj>
          <Typography sx={{ paddingLeft: '5px' }}> {post.comment}</Typography>
          <Emoj icon='Share' color=''></Emoj>
          <Typography sx={{ paddingLeft: '5px' }}> {post.share}</Typography>
        </CardActions>
      </Box>

      <Divider variant="middle" />
      <CardActions sx={{ display: 'flex' ,width:'100%',justifyContent: 'space-between' }}>
        <IconButton aria-label="add to favorites" sx={{borderRadius:0,width:'33%'}}>
          <ThumbUpOutlinedIcon />
          <Typography sx={{ paddingLeft: '5px' }}>Like</Typography>
        </IconButton>
        <IconButton aria-label="share" sx={{ borderRadius:0,width:'33%'}}>
          <ModeCommentOutlinedIcon />
          <Typography sx={{ paddingLeft: '5px' }}>Comment</Typography>
        </IconButton>
        <IconButton aria-label="share" sx={{borderRadius:0,width:'33%'}}>
          <ReplyOutlinedIcon sx={{ transform: 'scaleX(-1)' }} />
          <Typography sx={{ paddingLeft: '5px' }}>Share</Typography>
        </IconButton> 
      </CardActions>
      
    </Card>
  );
};

export default Post;
