import React from "react";
import { useData } from "../contextFolder/dataContext";
import HomeButton from "../uiComponents/homeButton";
import StarIcon from '@mui/icons-material/Star';

export default function ChildActor()
{
    const { actorArray } = useData();
    return(
        <div className="row child">
        <HomeButton/>
        <div className="card-container row">
            <h1 className="fonth1"><b>People's Favourite</b></h1>
  {actorArray.map((actor, index) => (
    
    <div key={index} className="card col-g-3  col-md-6 col-sm-12">
        <div>
            <img src={actor.posterUrl} alt={actor.pictureName} width={400} height={400}/>
        </div>
      <div className="card-body">
      <h3>{actor.pictureName}</h3>
            <h5>Lead Actor - {actor.leadActor}</h5>
            <h5>Director - {actor.directorName}</h5>
            <h5>Language - {actor.language}</h5>
            <h5>Genre - {actor.genre}</h5>
            <h6>{actor.description}</h6>
            <div className="rating">
                <StarIcon/>
                <h6>{actor.rating}</h6>
            </div>            
      </div>
    </div>
  ))}
</div>
    </div>
    )
}