import React from "react";
import { useState } from "react";
import "./OurArtist.css";
import Data from "../data";

const OurArtist = () => {

  const [data , setData] = useState(Data);


  const [readMore , setReadMore] = useState(false);
  return (
    <div className="our-artist">
        <h1>Our Artist</h1>

        <div className="artist-cards">
            {data.map((items , index) => {
                  const {id , image , info , name} = items
                  return(
                    <div key={id} className="artist-card">
                       <img src={image} alt={id}/>
                       <h2>{name}</h2>
                       <p> 
                          {readMore ? info : `${info.substring(0 , 200)}....`}
                       </p>
                       <label for="html" onClick={() => setReadMore(!readMore)}>
                              {readMore ? 'Show Less':'Read More'}
                        </label>
                    </div>
                    
                  )
                })}
        </div>
    </div>
  );
};

export default OurArtist;
