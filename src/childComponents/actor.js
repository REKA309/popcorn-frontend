import React from "react";
import { useNavigate } from "react-router-dom";
import HomeButton from "../uiComponents/homeButton";
import { useData } from '../contextFolder/dataContext';
import axios from 'axios';
export default function Actor()
{
  const actors=[
    {
      url: 'https://e1.pxfuel.com/desktop-wallpaper/772/769/desktop-wallpaper-ajith-s-arrambam-release-date-arrambam.jpg',
      actorName:'Ajith Kumar'
    },
    {
        url: 'https://cdn.siasat.com/wp-content/uploads/2022/05/New-Project-1.jpg',
        actorName:'Kamal Hassan'
      },
     {
        url: 'https://images.news18.com/ibnlive/uploads/2022/12/11-2-1.jpg',
        actorName:'Rajinikanth'
      },
     {
        url: 'https://e1.pxfuel.com/desktop-wallpaper/558/976/desktop-wallpaper-suriya-aka-surya-tamil-actor-gallery-actor-surya.jpg',
        actorName:'Suriya'
      },
      {
        url: 'https://cdn.telanganatoday.com/wp-content/uploads/2023/04/Vijay-Thalapathy.jpg',
        actorName:'Vijay'
      },
      {
        url: 'https://wallpaperaccess.com/full/1552938.jpg',
        actorName:'Vikram'
      },
  ]
  const navigate = useNavigate();
  const { setActorArray } = useData();

  const handleActor = (actor) => {
    axios.get(`https://popcorntime-movie-series.onrender.com/popcornTime/actorpicture/${actor}`)
      .then((res) => {
        const fetchedActorArray = res.data; // Assuming the response contains an array

        
        // Update the context with the fetched data
        setActorArray(fetchedActorArray);

        // Navigate to the child component for actors
        navigate('/childactor');
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
        alert('An error occurred while making the request.');
      });
  };
  return(
    <div className="row">
      <HomeButton/>
      <h1 style={{textAlign:'center'}}>Tamil Actors</h1>
        <div className="director-container row ">
      {actors.map((actor,index)=>(
        <div className="child-actor col-lg-4  col-sm-6 " key={index}>
          <img src={actor.url} alt={actor.actorName} className="circular-actor" onClick={()=>handleActor(actor.actorName)} />
          <h5 style={{textAlign:'center'}}>{actor.actorName}</h5>
        </div>
        
      ))}
    </div>
    </div>
  
  )
}