
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'; 
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';

import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
const Emoj = ({ icon,color, bgcolor ,round,width}) => {
    return (
  
      <IconButton sx={{
        borderRadius: round,
        backgroundColor: bgcolor,
        color: color,
        height: '25px',
        width: width,
        textAlign: 'center',
        marginLeft: '5px',
        marginRight: '-10px',
        marginTop: '5px',
        marginBottom: '5px'
      }}>
        {icon === 'Like' ?
          <ThumbUpOutlinedIcon sx={{ fontSize: '15px' }}></ThumbUpOutlinedIcon>
          : icon === 'Heart' ?
            <FavoriteRoundedIcon sx={{ fontSize: '15px' }}></FavoriteRoundedIcon>
            : icon === 'Sad' ?
              '😢'
              : icon === 'Happy' ?
              '😂'
              : icon === 'Comment' ?
              <ModeCommentIcon sx={{ fontSize: '25px' ,color:'gray'}}></ModeCommentIcon>
              : icon === 'Share' ?
              <ReplyOutlinedIcon sx={{ fontSize: '25px' ,color:'gray', transform: 'scaleX(-1)' }}></ReplyOutlinedIcon>
              : '🥰'
        }
      </IconButton>
    )
  }
  export default  Emoj;