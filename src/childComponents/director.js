import React from "react";
import { useNavigate } from 'react-router-dom';
import HomeButton from "../uiComponents/homeButton";
import { useData } from '../contextFolder/dataContext';
// import { useState } from "react";
import axios from 'axios';
export default function Director()
{
  const navigate = useNavigate();
  const { setDirectorArray } = useData();

  const handleDirector = (director) => {
    axios.get(`https://popcorntime-movie-series.onrender.com/popcornTime/directorpicture/${director}`)
      .then((res) => {
        const fetchedDirectorArray = res.data; // Assuming the response contains an array
        
        
        // Update the context with the fetched data
        setDirectorArray(fetchedDirectorArray);

        // Navigate to the child component
        navigate('/childirector');
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
        alert('An error occurred while making the request.');
      });
  };

  const directors=[
    {
      url: 'https://igimages.gumlet.io/tamil/home/ar-murugadoss-15519m.jpg',
      directorName:'A.R.Murgadoss'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Atleeawrd.jpg',
      directorName:'Atlee'
    },
    
    {
      url: 'https://celebesse.com/wp-content/uploads/2023/06/kv-anand.jpg',
      directorName:'K.V.Anand'
    },
    {
      url: 'https://cdn.123telugu.com/content/wp-content/uploads/2022/10/Lokesh-Kanagaraj-m.jpg',
      directorName:'Lokesh Kanagaraj'
    },
    {
      url: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/mani-ratnam-1351-20-09-2017-01-11-11.jpg',
      directorName:'Mani Ratnam'
    },
   
   
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shankar_at_the_2.0_Trailer_Launch.jpg/1200px-Shankar_at_the_2.0_Trailer_Launch.jpg',
      directorName:'Shankar'
    },
    
    {
      url: 'https://www.behindwoods.com/tamil-movies/slideshow/ajiths-25-and-vijays-surprise-top-10-news/images/director-siva.jpg',
      directorName:'Siva'
    },
    {
      url: 'https://nettv4u.com/imagine/29-07-2017/venkat-prabhu.jpg',
      directorName:'Venkat Prabhu'
    },
    
  ]
  
  return(
    <div className="row">
      <HomeButton/>
      <h1 style={{textAlign:'center'}}>Tamil Directors</h1>
        <div className="director-container row ">
      {directors.map((director,index)=>(
        <div className="child-director col-lg-3  col-sm-6 " key={index}>
          <img src={director.url} alt={director.directorName} className="circular-image"onClick={()=>handleDirector(director.directorName)}/>
          <h5 style={{textAlign:'center'}}>{director.directorName}</h5>
        </div>
        
      ))}
    </div>
    </div>
  
  )
}