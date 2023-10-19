import React from 'react'
import { Typography } from '@mui/material';
import pot from '../assets/rui-matayoshi-IfC4e4sdEYc-unsplash.jpg'
import './acc.css'
const Pitch01 = () => {
  return(
   
    <div  className="devtha" style={{
      width: '100%',
      height: '150vh',
      
      display: 'flex',
      justifyContent: 'space-around',
      aignItems: 'center'
    }}>
    
      <div className='reva3' style={{ textAlign: 'center' }}>
            <Typography variant='h1' className='edda' style={{ color: 'black', }}>
              Connect with your friends
            </Typography>
        
            <p className='edda2' style={{ color: 'black', marginBottom: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
      </div>
    
      <div className="devtha2" style={{
        display: 'flex',
        flexDirection: 'row',
      
      }}>
                <div style={{
          borderRadius: '30px'


                }}>
                    <img src={pot} style={{
                      width: '550px',
                      height: '400px',
                      
                      borderRadius: '0 30px  30px 0'


                    }}  alt="nzbd"
                    
                    
                    
                    ></img>
                </div>
                <div className="devika3" >
                    <Typography variant="h2" style={{ color: 'black' }}>
                    Connect with your friends
                  </Typography>
                  <p  style={{ color: 'black' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                </div>
        
      </div>
      <div className="devtha2" style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor : '#005B95',
        paddingTop: '50px',
        paddingBottom : '50px',
        height: '55vh',
      }}>

          <div className="devika3" >
          <Typography variant="h2" style={{ color: 'black' }}>
          Connect with your friends
        </Typography>
        <p  style={{ color: 'black' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

      </div>
                <div style={{
          borderRadius: '30px'


                }}>
                    <img src={pot} style={{
                      width: '550px',
                      height: '400px',
                      
                      borderRadius: '30px 0px  0px 30px'


                    }}  alt="nzbd"
                    
                    
                    
                    ></img>
                </div>
               
        
      </div>
    </div>
    
  );

}
export default Pitch01