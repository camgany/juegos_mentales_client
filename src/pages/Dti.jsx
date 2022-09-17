import React from "react";
import Box from "@mui/material/Box";
import DTI from "../assets/images/escuelas/DTI.png";
import Navbar from "../components/Navbar";
import ButtonDti from "../components/dti/dti_button";
export default function Dti() {
    return (
        <Box>
            <Navbar />
        <Box sx={{ display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 'auto',
        margin: '2rem',
        maxHeight: '500%',
        height: '100%',
        backgroundColor: 'rgba(0,183,0,0.4)',
        borderRadius: '20px',
        padding: '2rem',
        
        }}>
            <ButtonDti />
        </Box>
        </Box>
    );
    }