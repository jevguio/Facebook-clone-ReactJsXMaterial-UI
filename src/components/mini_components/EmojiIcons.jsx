
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Box, Icon, IconButton, Tooltip } from '@mui/material';

import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

const Emoj = ({ icon, color, bgcolor, round, width }) => {
  return (
   
      <Icon sx={{
        borderRadius: round,
        color: color,
        height: '40px',
        width: '40px',
        textAlign: 'center',
      }}>
        <ThumbUpRoundedIcon sx={{ fontSize: '30px', paddingTop: '5px' }}></ThumbUpRoundedIcon>

        {/* {icon === 'Like' ?
          <ThumbUpRoundedIcon sx={{ fontSize: '30px' ,paddingTop:'5px'}}></ThumbUpRoundedIcon>
          : icon === 'Heart' ?
            <FavoriteRoundedIcon sx={{ fontSize: '30px' ,paddingTop:'5px'}}></FavoriteRoundedIcon>
            : icon === 'Sad' ?
              '😢'
              : icon === 'Happy' ?
              '😂'
              : icon === 'Comment' ?
              <ModeCommentIcon sx={{ fontSize: '25px' ,color:'gray'}}></ModeCommentIcon>
              : icon === 'Share' ?
              <ReplyOutlinedIcon sx={{ fontSize: '25px' ,color:'gray'}}></ReplyOutlinedIcon>
              : '🥰'
        } */}

      </Icon>

  )
}
export default Emoj;