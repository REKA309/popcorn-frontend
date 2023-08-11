import React from "react";
import { useData } from "../contextFolder/dataContext";
import HomeButton from "../uiComponents/homeButton";
import StarIcon from '@mui/icons-material/Star';

export default function ChildGenre()
{
    const { genreArray } = useData();
    return(
        <div className="row child">
            <HomeButton/>
            <div className="card-container row">
      {genreArray.map((genre, index) => (
        
        <div key={index} className="card col-g-3  col-md-6 col-sm-12">
            <div>
                <img src={genre.posterUrl} alt={genre.pictureName} width={400} height={400}/>
            </div>
          <div className="card-body">
          <h3>{genre.pictureName}</h3>
                <h5>Lead Actor - {genre.leadActor}</h5>
                <h5>Director - {genre.directorName}</h5>
                <h5>Language - {genre.language}</h5>
                <h5>Genre - {genre.genre}</h5>
                <h6>{genre.description}</h6>
                <div className="rating">
                    <StarIcon/>
                    <h6>{genre.rating}</h6>
                </div>            
          </div>
        </div>
      ))}
    </div>
        </div>
    )
}