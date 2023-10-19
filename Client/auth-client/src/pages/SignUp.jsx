import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, TextField, Button, Grid, Typography, Divider } from '@mui/material';
// import './SignUp.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";


export default  function SignUp() {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:3001/register')
        .then((res) => {
            // console.log(res.data)
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:3001/register', { email, username, password })
        .then(() => {
            alert('Registration Successful')
            setEmail('')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/login')
        })
        .catch((error) => {
            console.log('Unable to register user')
        })

    }

  return (
//     <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
//     <Card className="signup-card">
//         <CardContent className="signup-card-content">
//             <Grid container spacing={3}>
//                 <Grid item xs={6}>
//                     <div className="signup-left">
//                         <Typography variant="h4" color="textPrimary" gutterBottom>
//                             Welcome to our platform!
//                         </Typography>
//                         <p>Some introductory text or image goes here.</p>
//                     </div>
//                 </Grid>
//                 <Divider orientation="vertical" flexItem />
//                 <Grid item xs={5}>
//                     <div className="signup-right">
//                         <Typography variant="h4" color="textPrimary" gutterBottom>
//                             Sign Up
//                         </Typography>
//                         <form onSubmit={handleSubmit}>
//                             <TextField
//                                 className="input-field"
//                                 label="Email"
//                                 variant="outlined"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 fullWidth
//                             />
//                             <TextField
//                                 className="input-field"
//                                 label="Username"
//                                 variant="outlined"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 fullWidth
//                             />
//                             <TextField
//                                 className="input-field"
//                                 label="Password"
//                                 variant="outlined"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 fullWidth
//                             />
//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 className="submit-button"
//                                 fullWidth
//                             >
//                                 Sign Up
//                             </Button>
//                         </form>
//                     </div>
//                 </Grid>
//             </Grid>
//         </CardContent>
//     </Card>
// </Grid>
<>
<FormContainer>
  <form  onSubmit={handleSubmit}>
    <div className="brand">
      <img src={Logo} alt="logo" />
      <h1>snappy</h1>
    </div>
    <input
      type="text"
      placeholder="Username"
      name="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="email"
      placeholder="Email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      name="password"
     
                                value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
   
    <button type="submit">Create User</button>
    <span>
      Already have an account ? <Link to="/login">Login.</Link>
    </span>
  </form>
</FormContainer>
<ToastContainer />

</>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
