import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://yourhr-7hsc.onrender.com/api/users/login', formData);
      if(res.data){
        localStorage.setItem('token', `Bearer ${res.data.token}`)
        navigate('/userPage')
      }

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
