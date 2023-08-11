import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function HomeButton()
{
    const navigate=useNavigate()
    function handleHome()
    {
        navigate('/')
    }
    return(
        <div className="homebtn"> 
      <Button variant="contained" onClick={handleHome} color="error">
         Home
        </Button>
       </div>
    )
}