import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import Link from '@mui/material/Link';

const App = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleProceed = () => {
    window.location='./login';
  };

  useEffect(() => {
    setModalOpen(true);
  }, []);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to the Jev Guio<br></br>School Project Website
      </Typography> 
      <Button onClick={handleOpen} sx={{ marginLeft:'auto',marginRight:'auto',display:'block'}} variant="contained" color="primary">View Notice</Button>
          
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            Important Notice:
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            This website is created solely for a school activity as a part of my coursework. It is designed to replicate the layout and design of Facebook.
          </Typography>
          <Typography sx={{ mt: 2 }}><strong>Please Note:</strong></Typography>
          <ul>
            <li>No data is collected from this site.</li>
            <li>The site only features a static account for demonstration purposes.</li>
            <li>Use the following credentials to log in:</li>
            <ul>
              <li><strong>Username:</strong> jev</li>
              <li><strong>Password:</strong> guio</li>
            </ul>
          </ul>
          <Typography sx={{ mt: 2 }}>Thank you for your understanding!</Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">Close</Button>
          <Button onClick={handleProceed} sx={{position:'absolute', mt: 2,mr:5,right:0}} variant="contained" color="primary">Proceed</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default App;
