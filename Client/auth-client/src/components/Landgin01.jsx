import React from 'react'
import  { Grid, AppBar, Toolbar, Typography,Button }  from '@mui/material';
import land from './surface-0WFE46jwO8o-unsplash.jpg'
import './Land01.css'
const  Patch01 = () => {

return (
  <div style={{ 
    height: '90vh',
    display: 'flex',
    width: '100%',
    padding: '0',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
  <div style={{ 
    backgroundColor: '#5072A7',  
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start', /* Align items at the top */
    width: '67%',
    height: '100%',
    flexDirection: 'column',
    overflow: 'auto', /* Allow overflow content */
    paddingRight: '10px',
   paddingLeft: '30px' /* Add some space on the right side */
  }}>

  <div >
          <Typography className='edda' variant="h2" style={{ color: 'white' }}>
          Connect Anytime, Anywhere.Stay Connected in Real Time.
        </Typography>
        <Typography variant="h4" style={{ color: 'white', marginTop: '30px', right:' 0' }}>
        Stay Connected in Real Time
      </Typography>
              
    </div>
    <div>
          <p className='edda2' style={{ color: 'white', marginBottom: '10px' }}>
          
          Experience video calls like never before with our high-definition video quality. Say goodbye to pixelated images and hello to crystal clear video chats.
          Your privacy and security are our top priorities. 
      
          </p>
        <p style={{ color: 'white', marginBottom: '10px' }}>
          </p>
    </div>
   
  </div>
    <div className='lang-logo' style={{ 
      width: '33%',
      height: '100%'
    }}>
      <img src={land} alt="xhdf" style={{
        width: '100%',
        height: '100%'
      }} />
    </div>
  </div>
);

}
export default Patch01;