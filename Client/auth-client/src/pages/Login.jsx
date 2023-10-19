import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import './Login.css'

export default function Login() {
    const [users, setUsers] = useState([])
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
            console.log(res.data)
        })
    }


    const handleLogin =  async (event) => {
        event.preventDefault();
        try {
            const response = await axios
            .post('http://localhost:3001/login', { username, password })
            const token = response.data.token
            alert('Login successful')
            setUsername('')
            setPassword('')
            fetchUsers();
            navigate('/account')
            window.location.reload();
            localStorage.setItem('token', token)
            localStorage.setItem('username', "vishal")
        } catch (error) {
            console.log('Login Error', error)
        }
    }


  return (
    // <div className='bunny' style={{ display: 'flex', height: '100vh', backgroundColor: 'rgb(218,219,241)' }}>
    //   <Grid container justifyContent="center" alignItems="center" style={{ flex: 1 }}>
    //     <Grid item xs={12}>
    //       <Typography variant="h4" align="center">
    //         Welcome to our App
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={12}>
    //         <Typography variant="h6" align="center">
    //         Shankar Dhada MBBS Uha Uha
    //     </Typography>
    //     </Grid>
    //   </Grid>
    //   <Grid container justifyContent="center" alignItems="center" style={{ flex: 1 }}>
    //     <Card style={{ minWidth: 300, padding: 16 }}>
    //       <CardContent>
    //         <Typography variant="h5" align="center" gutterBottom>
    //           Login
    //         </Typography>
    //         <form onSubmit={handleLogin}>
    //           <TextField
    //             label="Username"
    //             fullWidth
    //             variant="outlined"
    //             margin="normal"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //           <TextField
    //             label="Password"
    //             fullWidth
    //             variant="outlined"
    //             margin="normal"
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //           <Button
    //             variant="contained"
    //             color="primary"
    //             fullWidth
    //             type="submit"
    //             className="blackTextButton"
    //             style={{ marginTop: 16, color: 'black' }}
    //           >
    //             Login
    //           </Button>
    //         </form>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </div>

    <>
      <FormContainer>
        <form action="" onSubmit={handleLogin}>
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
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
                onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
         
            <span>
            Don't have an account ?  <Link to="/signup">Create Here.</Link>
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
    padding: 5rem;
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
