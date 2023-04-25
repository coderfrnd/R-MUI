import React from 'react'
import Lay from '../component/Layout/Lay'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {MenuList} from '../Data/data'


export default function Menu() {
  return (
    <Lay>
    <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
  {
    MenuList.map((menu)=>(

      <Card   sx={{maxWidth:'400px', m:2}}>
        <CardActionArea>
          <CardMedia
          sx={{
            minHeight:'400px',
          }}
          component={'img'}
          src={menu.image}
          alt={menu.name}



          
          >

          </CardMedia>
          <CardContent>
            <Typography variant='h5' gutterBottom component={'div'}>
              {menu.name}
            </Typography>
            <Typography variant='body2'>
              {menu.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))
  }
    </Box>
    </Lay>
  )
}
