import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.name);
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('resume', formData.resume);

    try {
      // console.log(form);
      for(let pair of formDataToSend.entries()){
        console.log(pair[0]+":"+pair[1]);
      }
      const res = await axios.post('https://yourhr-7hsc.onrender.com/api/users/register', formDataToSend);
      console.log(res.data);
      if(res.data){
        navigate('/');
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
          Register
        </Typography>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <Button
          variant="contained"
          component="label"
          sx={{ textTransform: 'none' }}
        >
          Upload Resume
          <input
            type="file"
            name="resume"
            hidden
            onChange={handleChange}
            required
          />
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>

      </Box>
    </Container>
  );
};

export default Register;
