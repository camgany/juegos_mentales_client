import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../assets/images/seupb2022.svg";
export default function Navbar() {
    return (
        <Box>
            <img src={logo}  style={{width: '10%', height: '10%', margin: '1rem'}}/>
        </Box>
    );
    }