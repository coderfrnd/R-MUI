import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Headstyle.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg'
export default function Head() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 const drawer = (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1 ,my:2}}>
      <img src={Logo} alt="logo" height='70px' width='200px' />
               </Typography>
               <Divider/>
     <ul className='mob-navigation'>
      <li>
        <NavLink activeClassName="active" to={'./'}>Home</NavLink>
        </li>
        <li>
        <NavLink to={'./about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'./menu'}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={'./contact'}>Contact</NavLink>
      </li>
     </ul>
  </Box>
 )

 
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display : {sm:'none'}}
          // onClick={handleDrawerToggle}  
          } 
          onClick={handleDrawerToggle}
            >
            <MenuIcon/>
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1}}>
             <img src={Logo} alt="logo" height='70px' width='250px' />
            </Typography>
            <Box sx={{display:{xs:'none',sm:'block'}}}>
     <ul className='navigation'>
      <li>
        <NavLink activeClassName="active" to={'/'}>Home</NavLink>
        </li>
        <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink to={'/menu'}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact</NavLink>
      </li>
     </ul>
    
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper":{
                boxSizing:"border-box",
                width:'240px',
              }
              // yahaa pe muidrawer ek mui kaa function hai usske baare mai padh lenaa jo width ke liye use huaa hai 
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  )
}
