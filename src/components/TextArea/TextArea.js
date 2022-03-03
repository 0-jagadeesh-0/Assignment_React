import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import './style.css'

function TextArea() {
    const [text, setText] = useState("");

    const downloadFile = () => {

        const element = document.createElement('a');
        const file = new Blob([text], { type: "text/plain;charset=utf-8" });
        element.href = URL.createObjectURL(file);
        element.download = "NewFile.txt";
        document.body.appendChild(element);
        element.click();
    }


    return (
        <Box>
            <Navbar />
            <Box className='playground'>
                <Typography variant="h5">
                    Text Arena
                </Typography>
                <textarea
                    id='text'
                    className='text-arena'
                    onChange={(e) => { setText(e.target.value) }}
                >
                </textarea>
                <Button onClick={downloadFile} style={{ margin: "10px 0" }} disableElevation variant="contained" >
                    Download
                </Button>
            </Box>

        </Box>
    )
}

export default TextArea