import React from "react";
// import { useLocation } from 'react-router-dom';
import HomeButton from "../uiComponents/homeButton";
import { useData } from '../contextFolder/dataContext';
import StarIcon from '@mui/icons-material/Star';

export default function ChildDirector()
{
    // const location = useLocation();
    // const childDirArr=location.state.directorarray
    const { directorArray } = useData();

   
    
    return(
        <div className="row child">
        <HomeButton/>
        <div className="card-container row">
            <h1 className="fonth1"><b>Top Picks</b></h1>
  {directorArray.map((director, index) => (
    
    <div key={index} className="card col-g-3  col-md-6 col-sm-12">
        <div>
            <img src={director.posterUrl} alt={director.pictureName} width={400} height={400}/>
        </div>
      <div className="card-body">
      <h3>{director.pictureName}</h3>
            <h5>Lead Actor - {director.leadActor}</h5>
            <h5>Director - {director.directorName}</h5>
            <h5>Language - {director.language}</h5>
            <h5>Genre - {director.genre}</h5>
            <h6>{director.description}</h6>
            <div className="rating">
                <StarIcon/>
                <h6>{director.rating}</h6>
            </div>            
      </div>
    </div>
  ))}
</div>
    </div>
    )
}