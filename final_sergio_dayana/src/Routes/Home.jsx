import React, { Suspense } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'
import NavBar from '../Components/Navbar'
import axios from 'axios'
import { useOutlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { Box } from '@mui/material'


const Home = () => {

  const [data, setData] = useState(null)

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios.get(url).then(res => setData(res.data)).catch(err => console.log(err))
  },[])

  const outlet = useOutlet();

  return (
    <Box component='div' sx={{display: {xs: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '50px'}, height: '100vh'}}>
      <NavBar/>
      <Suspense>
        {
          outlet || <main className='card-grid'>
                      {data?.map(odontologo => <Card {...odontologo} key={odontologo.id}/>)}
                    </main>
        }
      </Suspense>
      <Footer/>
    </Box>
  )
}

export default Home