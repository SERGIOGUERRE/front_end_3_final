import { Box } from '@mui/material'
import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'


const Contact = () => {

  const { state } = useContext(ContextGlobal)

  return (
    <Box component='main' display='flex' gap='10px' flexDirection='column' alignItems='center' width='40%' minWidth='300px' bgcolor='background.paper' padding='10px 30px'>
      <h2 style={{color: state.palette.mode === 'dark' ? '#fff' : '#000'}}>Want to know more?</h2>
      <p style={{color: state.palette.mode === 'dark' ? '#fff' : '#000'}}>Send us your questions and we will contact you</p>
      <Form/>
    </Box>
  )
}

export default Contact