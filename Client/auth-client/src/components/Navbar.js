import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { Grid, AppBar, Toolbar, Typography,Button }  from '@mui/material';
import Logo from '../assets/logo.svg'
import './nav.css'
function Navbar() {
    const isUserSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate();
    const username = !!localStorage.getItem('username')
    console.log(username);
    const handelLogOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

  return (
   <div>
    <div  style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: 20,
        zIndex: 1,
        background: "black",
       
        }}>
        <div style={{marginLeft: 10}}>
                <Link to={('/')} style={{
                    textDecoration: 'none',  // Removes underline
                    color: 'white',         // Sets text color to white
                    fontSize: '30px',       // Increases font size
                    fontFamily: 'Arial'     // Changes font family
                  }} >SNAPPY
                </Link>
        </div>
  
        {isUserSignedIn ? (
          <>
          <div style={{display: "flex"}} >
            <div style={{marginRight: 10,display: "flex"}}>
                    <div style={{marginRight: 10}}>
                        <Button variant={"contained"}
                        onClick={() => {
                            navigate("/account")
                        }}>Profile-{username}</Button>
                    </div>
                    <div style={{marginRight: 10}} >
                        <Button variant={"contained"} onClick={handelLogOut}
                        >Log Out</Button>
                    </div>
                </div>
            </div>
          </>
        ) : (
          <>
          <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                <Button variant={"contained"} onClick={() => {
                    navigate("/login")
                }}
                sx={{
                    fontSize: '16px',    
                    color: 'black',      
                    backgroundColor: 'white', 
                    fontFamily: 'Arial',
                    '&:hover': {
                      transform: 'scale(1.05)',  // Increases size on hover
                      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)'  // Adds shadow
                    }
                  }}
                >Login</Button>
                </div>
                <div >
                <Button variant={"contained"} onClick={() => {
                    navigate("/signup")
                }}
                sx={{
                    fontSize: '16px',    
                    color: 'black',      
                    backgroundColor: 'white', 
                    fontFamily: 'Arial',
                    '&:hover': {
                      transform: 'scale(1.05)',  // Increases size on hover
                      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)'  // Adds shadow
                    }
                  }}
                >Signup</Button>
                </div>
            </div>
          </>
        )}
    </div>
    
    </div>
  );
}

export default Navbar

