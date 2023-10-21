import React from 'react';
import {useNavigate} from 'react-router-dom';  // <-- Importing useHistory
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Pitch01 from '../components/Account01';
import Footer from '../components/Footer';
import Patch02 from '../components/Landing02';
import './Acc.css'
function Account() {
  const navigate = useNavigate();

  const goToLobby = () => {
    navigate('/Lobby');
  };

  return (
   <div>

   <div  style={{
    width: '100%',
    height: '30vh',
    backgroundColor: 'rgb(0, 91, 150)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }}>
    <Typography className='revat'  variant="h2" style={{
      fontWeight: '600'
    }}>
    Crystal Clear Quality
    </Typography>
    <p   style={{
      fontWeight: '300'
    }}>
        Experience high-definition video and audio for seamless and engaging video calls.
    </p>
    <Button 
      variant="contained" 
      style={{
        backgroundColor: '#005B96',
        color: 'white',
        marginTop: '1rem',
        transition: 'background-color 0.3s'
      }}
      onClick={goToLobby}
      onMouseOver={(e) => e.target.style.backgroundColor = '#003D6B'}
      onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
    >
      Go to the Lobby Screen
    </Button>
    
      </div>
      <Pitch01/>
      <Patch02></Patch02>
      <Footer/>
   </div>
   
     
    
  );
}

export default Account;