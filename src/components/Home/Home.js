import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Box, Paper, Typography } from '@mui/material'
import Navbar from '../Navbar/Navbar'

function Home() {
  const navigate = useNavigate();
  return (
    <Box className='home'>
      <Navbar />
      <Box className="contents">
        <Paper className='audio-card' style={{ backgroundColor: "#9ADCFF" }} onClick={() => { navigate("/textarea") }}>

          <Typography>
            Text Arena
          </Typography>


        </Paper>
        <Paper className='audio-card' style={{ backgroundColor: "#9ADCFF" }} onClick={() => { navigate("/audiostream") }}>

          <Typography>
            Audio Stream
          </Typography>


        </Paper>
      </Box>


    </Box>
  )
}

export default Home