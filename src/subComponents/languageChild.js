import React from "react";
import { useData } from "../contextFolder/dataContext";
import HomeButton from "../uiComponents/homeButton";
import StarIcon from '@mui/icons-material/Star';

export default function ChildLanguage()
{
    const { languageArray } = useData();
    return(
        <div className="row child">
        <HomeButton/>
        <div className="card-container row">
  {languageArray.map((language, index) => (
    
    <div key={index} className="card col-g-3  col-md-6 col-sm-12">
        <div>
            <img src={language.posterUrl} alt={language.pictureName} width={400} height={400}/>
        </div>
      <div className="card-body">
      <h3>{language.pictureName}</h3>
            <h5>Lead Actor - {language.leadActor}</h5>
            <h5>Director - {language.directorName}</h5>
            <h5>Language - {language.language}</h5>
            <h5>Genre - {language.genre}</h5>
            <h6>{language.description}</h6>
            <div className="rating">
                <StarIcon/>
                <h6>{language.rating}</h6>
            </div>            
      </div>
    </div>
  ))}
</div>
    </div>
    )
}