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
            Intuitive Interface
            </Typography>
        
            <p className='edda2' style={{ color: 'black', marginBottom: '10px' }}>
            Navigate our user-friendly platform effortlessly for a hassle-free video call experience.
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
                    <Typography variant="h2" style={{ color: 'black', fontWeight: '600' }}>
                    Secure and Private
                  </Typography>
                  <p  style={{ color: 'black', fontWeight: '400' }}>
                  Rest easy knowing your conversations are encrypted and your privacy is our top priority.
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

          <div className="devika3" style={{
            paddingLeft: '30px'
          }} >
          <Typography variant="h2" style={{ color: 'black' , fontWeight: '600' }}>
          Effortless Scheduling
        </Typography>
        <p  style={{ color: 'black' , fontWeight: '400'}}>
        Schedule and manage video calls with ease, ensuring everyone connects at the right time.
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