import React from 'react'
import  { Grid, AppBar, Toolbar, Typography,Button }  from '@mui/material';
import pt1 from '../assets/kendrick-fernandez-Nn3LYKu1fUY-unsplash.jpg'
import pt2 from '../assets/lisa-therese-ZYUfnilDZEI-unsplash.jpg'
import pt3 from '../assets/lochlainn-riordan-AwAzZXf03n0-unsplash.jpg'
const Patch02 = () => {
    return(
      
      <div style={{
      
        height: '70vh',  // Set the height to 100px
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',  // Set the width to 100%
      }}>
        <div style={{ 
          display: 'flex',
          height: '70vh',
          flexDirection: 'column',
          width: '100%',
          position: 'relative',
          justifyContent: 'space-between',
        }}>
          <div style={{ 
           
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            textAlign: 'center'
          }}>
            <Typography variant="h2">
            Stay Connected in Real Time
            </Typography>
            <p>
            With our video chat application, you can have real-time conversations, just as if you were in the same room. Connect and communicate with loved ones or colleagues instantly.
            Boost productivity by conducting virtual meetings, collaborative work sessions, and team discussions. Get work done efficiently from anywhere.
            Whether you're miles apart or just down the street, our video chat app brings you closer to family and friends. Share special moments and maintain those meaningful connections.

            </p>
            
          </div>
          <div style={{ 
            flex: 1,
            display: 'flex',
            flexwrap: 'nowrap',
            justifyContent: 'center ',
            alignItems: 'center',
          }}>
           
           
              <img src={pt2} alt="xhdf" style={{
                width: '150px',
                height: '250px',
                marginRight: '50px',
              }} />
              <img src={pt3} alt="xhdf" style={{
                width: '150px',
                height: '250px',
                marginRight: '50px',
              }} />
              <img src={pt1} alt="xhdf" style={{
                width: '150px',
                height: '250px',
                marginRight: '50px',
              }} />
           
            
          </div>
        </div>
      </div>
    );
}
export default Patch02;