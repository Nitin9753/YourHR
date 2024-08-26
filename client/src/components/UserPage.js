import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const token=localStorage.getItem('token')?localStorage.getItem('token'):null;
    console.log('token', token);
    const navigate=useNavigate();
  return (
    <>{
        !token?navigate('/'):
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Profile
            </Typography>
            <Typography>Name: John Doe</Typography>
            <Typography>Email: john.doe@example.com</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Edit Profile
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
            >
            <Typography variant="h6" gutterBottom>
              Job Search
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="secondary">
                Search Jobs
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{
                p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" gutterBottom>
                Recent Activities
            </Typography>
            <Typography>Applications Submitted: 10</Typography>
            <Typography>Interviews Scheduled: 3</Typography>
            <Typography>Offers Received: 1</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
            }
                </>
  );
};

export default UserPage;
