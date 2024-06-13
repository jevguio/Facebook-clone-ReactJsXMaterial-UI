import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorPage = () => {
  const handleGoBack = () => {
    // Logic to navigate back to the homepage or previous page
    window.location.href = './'; // Adjust this according to your routing setup
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '100px' }}>
      <ErrorOutlineIcon style={{ fontSize: '100px', color: '#f44336' }} />
      <Typography variant="h3" component="h1" gutterBottom>
        Something Went Wrong
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        We're having trouble loading this page right now. Please try again later.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoBack}>
        Go Back to Homepage
      </Button>
    </Container>
  );
};

export default ErrorPage;
