import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '../components/schools/button';
import Navbar from '../components/Navbar';
const Schools = () => {
    return (
        <div>
            <Navbar />
            <Box sx={{ display: 'flex',
            flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem',
        }}>
            
        <Typography fontWeight={'bold'} fontSize={40} fontFamily="Ubuntu" color="#000000">
           SELECCIONA TU ESCUELA
        </Typography>
        </Box>
        <Button />
        </div>
    );
    }
export default Schools