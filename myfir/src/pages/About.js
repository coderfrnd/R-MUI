import React from 'react'
import Lay from '../component/Layout/Lay'
import { Box, Typography } from '@mui/material'

export default function About() {
  return (
  <Lay>
    <Box sx={{
      my:15,
      textAlign:'center',
      p:2,
      "& h4":{
        fontWeight:'bold',
        my:2,
        fontSize:'2rem',
      },
      "& p":{
        textAlign:'justify',
      },
      "@media (max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:'1.5 rem',
        },
      }
    }}   >
      <Typography variant='h4'>
        Welcome to my Restaurant
      </Typography>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor itaque voluptas alias laborum! Autem, voluptate fugiat, est natus fugit itaque eos ipsa consequuntur temporibus corporis, similique quam error labore voluptas. Temporibus sequi incidunt libero deleniti doloribus eveniet distinctio soluta provident vitae adipisci? Accusamus velit distinctio qui atque aut minus earum ipsum dolores, eligendi debitis consequatur incidunt id? Neque sapiente dolorum repellendus quam, enim vero deserunt accusantium quisquam mollitia obcaecati placeat dolores sint doloribus, exercitationem labore quod rerum ad magni consequuntur libero consectetur modi? Sapiente, repudiandae! Voluptate itaque, sit pariatur, enim vitae culpa fuga et atque cum obcaecati consectetur delectus quo?</p>
      <br></br>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur adipisci error sequi non dolorem quasi fugiat fuga consequatur ducimus tempora fugit unde natus necessitatibus provident vero beatae voluptatum neque maxime, quisquam itaque. Vel officia eius doloremque eum libero, ea totam placeat dignissimos quisquam voluptatum labore possimus non. Minima numquam, sapiente aspernatur rerum recusandae quaerat in accusantium ex rem animi doloribus voluptate velit harum similique nemo placeat deserunt perspiciatis veritatis ea porro adipisci error iure provident reiciendis. Rem, commodi? Provident est nesciunt in ducimus, eveniet quae enim possimus non voluptatibus aperiam saepe veniam asperiores consectetur. Quod esse exercitationem reprehenderit voluptatibus iusto!</p>
    </Box>
  </Lay>
  )
}
