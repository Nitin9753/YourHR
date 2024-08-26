import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Register from './components/Register';
import Login from './components/Login';
import UserPage from './components/UserPage';

function App() {
  const token=localStorage.getItem('token')?localStorage.getItem('token'):null;
  console.log('token', token);
  const navigate=useNavigate();
  const handelLogout=()=>{
    try{
      localStorage.removeItem('token');
      navigate('/');
    }catch(err){
      console.log(err);
    }
  }
  return (
<>
      <AppBar position="static">
        <Toolbar>
          {!token?<Button color="inherit" LinkComponent={Link} to="/register">
            Register
          </Button>:""}
          {!token?<Button color="inherit" LinkComponent={Link} to="/">
            Login
          </Button>:""}
          {token?<Button color="inherit" LinkComponent={Link} to="/userPage">
            Dashboard
          </Button>:""}
          {token?<Button color="inherit" onClick={handelLogout}>Logout</Button>: ""}
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/userPage" element={<UserPage/>} />
        </Routes>
      </Container>
   
</>
  );
}

export default App;
