import React from 'react'
import Lay from '../component/Layout/Lay'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
function Contact() {
  return (
    <Lay>
       <Box sx={{my:5,ml:10,"& h4":{ fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact My restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus ea dolorum impedit cumque blanditiis ipsa autem debitis nobis perferendis, asperiores hic porro facere magnam dolor eum ex dolore! Veniam officiis maxime harum quasi repellendus itaque alias, voluptas esse ut recusandae aut molestias est ducimus animi? Quas, praesentium natus. Excepturi, debitis nihil! Pariatur consequatur quas, corrupti facere neque rerum similique ut voluptatibus deserunt voluptates illum laborum fugiat dolor fugit saepe vitae non dignissimos nulla libero quos nihil odit veniam? A nam distinctio laborum error accusantium vero, ex modi. Reprehenderit obcaecati odio quos dolore numquam. Nesciunt minus minima expedita qui cum!
        </p>
       </Box>
       <Box sx={{
        m:3,
      width:'600px', 
       ml:10,
      "@media (max-width:600px)":{
        width:'300px',
        
      },

    
      
      
      }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white',}} align='center'>Contact-Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
               <SupportAgentIcon sx={{color:'red',pt:1}}/> 01125532553 (toll free number)
                </TableCell>

              </TableRow>
              <TableRow>
               <TableCell>
             <MailIcon  sx={{color:'skyblue',pt:1}} /> kyukarrahamail@gmail.com
                </TableCell>
               </TableRow>
               <TableRow>
               <TableCell>
            <PermPhoneMsgIcon  sx={{color:'green',pt:1}} /> call mat kr be
                </TableCell>
               </TableRow>

            </TableBody>

          </Table>
        </TableContainer>
       </Box>
    </Lay>
  )
}

export default Contact