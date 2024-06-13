import React, { useEffect, useState } from "react";

import Emoj from '../components/mini_components/Emoji';
import { Box, CardMedia, Divider, Tooltip, Card, CardContent, CardHeader, Avatar, IconButton, CardActions, Typography, Button, useMediaQuery } from "@mui/material";
import { CloseOutlined, ErrorOutline, MoreVert } from "@mui/icons-material";


import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Fade from '@mui/material/Fade';
const like =
  <><ThumbUpOutlinedIcon sx={{ marginRight: '5px' }} /> Like</>;
const liked =
  <><ThumbUpAlt sx={{ marginRight: '5px' }} /> Liked</>;
const heart = <><FavoriteRoundedIcon sx={{ backgroundColor: '#df4b5f', color: 'white', padding: '5px', marginRight: '5px', borderRadius: '15px' }} /> Heart</>;
const sad = '😢 Sad';
const Haha = '😂 Haha';
const Care = '🥰 Care';



function App({ post, setPost }) {

  const portrait = useMediaQuery('(max-width:900px)');
  const [reactIcon, setReact] = useState(like);
  const [isClick, setClick] = useState(false);
  const [colorCode, setcolorCode] = useState('white');
  let click = false;
  const [open, setOpen] = React.useState(false);
  const [prev, setPrev] = React.useState('');
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => { 
    // Additional logic you want to run when count changes
  }, [isClick, reactIcon, prev, portrait]);
  const handleOpen = () => {
    setOpen(true);
  };
  const CloseHandler = () => {
    setPost(null);
  }

  const OnReactHandle = (va, colr, type) => {
    if (type === prev) {
      setPrev(null);
      setReact(like);
      setClick(false);

      console.log(true)
      setPrev(null);
    } else {

      setcolorCode(colr);
      setClick(true);
      click = true;
      setReact(va);
      handleClose();
      setPrev(type);
    }

  }
  const OnClickReact = () => {
    if (!isClick) {
      setcolorCode('#1877F2');
      setReact(liked);

    } else {

      setReact(like);
    }

    setClick(!isClick);

  }
  const image = post.image;
  return (
    <>
    
      <Box sx={{ display: "flex", marginTop: '4%' }}>
        <Box sx={{ width: portrait?'100%':'60%', backgroundColor: 'rgba(0,0,0,0.85)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '10px', backgroundBlendMode: 'darken' }}>

          <Button sx={{ aspectRatio: '1/1', position: 'absolute',marginTop:portrait?'7%':'2%', borderRadius: '100%', backgroundColor: 'rgba(110,110,110,110.5)', color: 'white', zIndex: 1 }} onClick={CloseHandler}><CloseOutlined></CloseOutlined></Button>
          {post.image && <CardMedia component="img" image={"./"+post.image} alt="Post image" sx={{ aspectRatio: '8/16', width: 'auto', maxHeight: '600px', marginLeft: 'auto', marginRight: 'auto' }} />}
          {post.video && <CardMedia component="video" src={"./"+post.video} controls alt="Post image" />}
        </Box>
        
        <Box sx={{ width: '35%' ,display:portrait?'none':'block'}}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="recipe" src={"./"+post.profile}>{post.author[0]}</Avatar>}
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={post.author}
              subheader={post.date}
            />
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <CardActions sx={{ display: 'flex', width: '50%', left: 0 }}>
                  <Emoj icon='Like' color='white' bgcolor='#1877F2' round='50%' width='25px'></Emoj>
                  <Emoj icon='Heart' color='white' bgcolor='#df4b5f' round='50%' width='25px'></Emoj>
                  <Emoj icon='Sad' color='white' bgcolor='' round='50%' width='25px'></Emoj>
                  <Emoj icon='Happy' color='white' bgcolor='' round='50%' width='25px'></Emoj>
                  <Typography sx={{ paddingLeft: '10px' }}> {post.likes}</Typography>
                </CardActions>
                <CardActions sx={{ display: 'flex', width: '35%', textAlign: 'right' }}>
                  <Emoj icon='Comment' color=''></Emoj>
                  <Typography sx={{ paddingLeft: '5px' }}> {post.comments}</Typography>
                  <Emoj icon='Share' color=''></Emoj>
                  <Typography sx={{ paddingLeft: '5px' }}>{post.share}</Typography>
                </CardActions>
              </Box>
            </CardContent>
            <Divider variant="middle" />
            <CardActions sx={{ display: 'flex' }}>

              {/* <ButtonLike sx={{ width: '30%' ,borderRadius:0}}/> */}
              <Tooltip title={<IconicReact OnReactHandle={OnReactHandle} ></IconicReact>}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                placement="top" arrow
                open={open} onClose={handleClose} onOpen={handleOpen}
              >
                <IconButton onClick={OnClickReact} aria-label="React" sx={{ width: '30%', borderRadius: 0, color: isClick ? colorCode : 'gray', fontSize: 'large' }}>
                  {reactIcon}
                  {/* <EmojiIcons icon='Heart' bgcolor='white' color='#df4b5f' ></EmojiIcons>
          <EmojiIcons icon='Sad' color='white' bgcolor=''></EmojiIcons>
          <EmojiIcons icon='Happy' color='white' bgcolor=''></EmojiIcons> */}

                </IconButton>
              </Tooltip>

              <Tooltip title="Comment" arrow >
                <IconButton aria-label="Comment" sx={{ width: '30%', borderRadius: 0, fontSize: 'large', marginRight: '5px' }}>
                  <ModeCommentOutlinedIcon />Comment
                </IconButton>
              </Tooltip>

              <Tooltip title="Share" arrow >
                <IconButton aria-label="Share" sx={{ width: '30%', borderRadius: 0, fontSize: 'large', marginRight: '5px' }}>
                  <ReplyOutlinedIcon sx={{ transform: 'scaleX(-1)' }} />
                  Share
                </IconButton>
              </Tooltip>
            </CardActions>

          </Card>
        </Box>
      </Box>
    </>
  )
}
const IconicReact = ({ OnReactHandle }) => {
  return (
    <Box>
      <Tooltip title="Like" arrow>
        <IconButton sx={{ backgroundColor: '#1877F2', margin: '5px' }}

          onClick={() => OnReactHandle(liked, '#1877F2', 'liked')}
        >
          <ThumbUpRoundedIcon sx={{ color: 'white', fontSize: '30px' }} />

        </IconButton>
      </Tooltip>

      <Tooltip title="Heart" arrow>
        <IconButton sx={{ backgroundColor: '#df4b5f', margin: '5px' }}

          onClick={() => OnReactHandle(heart, '#df4b5f', 'heart')}>
          <FavoriteRoundedIcon sx={{ color: 'white', fontSize: '30px' }} />

        </IconButton>
      </Tooltip>

      <Tooltip title="Sad" arrow>
        <IconButton sx={{ color: 'white', fontSize: '30px', backgroundColor: '#feb03f', padding: 0 }}
          onClick={() => OnReactHandle(sad, '#feb03f', 'sad')}
        >

          😢
        </IconButton>
      </Tooltip>

      <Tooltip title="Haha" arrow>
        <IconButton sx={{ color: 'white', fontSize: '30px', backgroundColor: '#feb03f', padding: 0 }}
          onClick={() => OnReactHandle(Haha, '#feb03f', 'Haha')}
        >

          😂
        </IconButton>
      </Tooltip>

      <Tooltip title="Care" arrow >
        <IconButton
          sx={{ color: 'white', fontSize: '30px', backgroundColor: '#feb03f', padding: 0 }}
          onClick={() => OnReactHandle(Care, '#feb03f', 'Care')}
        >

          🥰
        </IconButton>
      </Tooltip>


    </Box>
  );
}
export default App;