import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useData } from '../contextFolder/dataContext';
export default function Carousel()
{
  const navigate = useNavigate();
  const { setLanguageArray } = useData();

  const handleLanguage = (language) => {
    axios.get(`https://popcorntime-movie-series.onrender.com/popcornTime/languagepicture/${language}`)
      .then((res) => {
        const fetchedLanguageArray = res.data; // Assuming the response contains an array
       

        // Update the context with the fetched data
        setLanguageArray(fetchedLanguageArray);

        // Navigate to the child component for languages
        navigate('/childlanguage');
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
        alert('An error occurred while making the request.');
      });
  };
    
    return(
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src="https://wallpapercave.com/dwp2x/wp11971177.jpg"
                                     height={510}
                 className="d-block w-100" alt="transformer" onClick={()=>handleLanguage("English")}/>
              
              
              </div>
              
              <div className="carousel-item">
              <img src="https://wallpapercave.com/dwp2x/wp2473295.jpg"
                     height={510}
                 className="d-block w-100" alt="hwarang" onClick={()=>handleLanguage("Korean")}/>
                
                
              </div>
              <div className="carousel-item">
                
               
                   <img src="https://wallpapercave.com/wp/wp8357935.jpg" 
                                     height={510}
                className="d-block w-100" alt="baji rao mastani" onClick={()=>handleLanguage("Hindi")}/>
                
              </div>
              <div className="carousel-item">
                
                <img src="https://wallpapercave.com/dwp2x/wp12260398.jpg"  
                                    height={510}
                 className="d-block w-100" alt="ps1" onClick={()=>handleLanguage("Tamil")}/>
                
              </div>
              
              
             
            
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


    )
}