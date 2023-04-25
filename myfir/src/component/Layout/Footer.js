import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
   <>
  <Box sx={{textAlign:'center',bgcolor:'black',color:'white',p:3}}>
    <Box sx={{my:3,  
    //  ab yaha pe jo ye icon hai basically vo svg class hai to ussme css uske object mai change krke krte hai
    "& svg":{
        fontSize:'60px',
        cursor:"pointer",
        mr:2,
    },
    // ab svg class ke hover event ko target kr rahe hai
    "& svg : hover":{
        color:'goldenrod',
        transform:'translateX(4px)',
        transition:'all 350ms',
        
    },

    
    }}>
        <InstagramIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        <YouTubeIcon/>
    </Box>
    <Typography variant='h5' sx={{"@media (max-width:600px)": {
        // yaha pe media query usee huaa hai isse padhh lenaa 
        fontSize:'1rem',
    }}}>
        All Rights Reserved &copy; attacker
    </Typography>
  </Box>
   </>
  )
}

export default Footer