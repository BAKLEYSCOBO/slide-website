import React from "react";
import { useState } from "react";
import Shusho from "../image/shusho.png";
import Jay from "../image/Jay.png";
import Mimi from "../image/Mimi.png";
import Prof from "../image/Prof.png";
import Shilole from "../image/Shilole.png";
import Ay from "../image/Ay.png";
import Jaydee from "../image/Jaydee.png";
import Barnaba from "../image/Barnaba.png";
import Bilnass from "../image/Bilnass.png";
import Gigy from "../image/Gigy.png";
import Sheta from "../image/Sheta.png";
import Baraka from "../image/Baraka.png";
import "./OurArtist.css";

const OurArtist = () => {
    const [open , setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    }
  return (
    <div className="our-artist">
        <h1>Our Artist</h1>

        <div className="artist-cards">
             <div className="artist-card">
                 <img src={Shusho} alt=""/>
                 <h2>CHRISTINA SHUSHO</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>

             <div className="artist-card">
                 <img src={Jay} alt=""/>
                 <h2>JAY ROX</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>

             <div className="artist-card">
                 <img src={Mimi} alt=""/>
                 <h2>MIMI MARS</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>

             <div className="artist-card">
                 <img src={Prof} alt=""/>
                 <h2>PROFESSOR JAY</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>

             <div className="artist-card">
                 <img src={Shilole} alt=""/>
                 <h2>SHILOLE</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>

             <div className="artist-card">
                 <img src={Ay} alt=""/>
                 <h2>AY MASTA</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>

             <div className="artist-card">
                 <img src={Jaydee} alt=""/>
                 <h2>Lady Jaydee</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>

             <div className="artist-card">
                 <img src={Barnaba} alt=""/>
                 <h2>CHRISTINA SHUSHO</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>

             <div className="artist-card">
                 <img src={Bilnass} alt=""/>
                 <h2>CHRISTINA SHUSHO</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>


             <div className="artist-card">
                 <img src={Gigy} alt=""/>
                 <h2>CHRISTINA SHUSHO</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>


             <div className="artist-card">
                 <img src={Sheta} alt=""/>
                 <h2>CHRISTINA SHUSHO</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>


             <div className="artist-card">
                 <img src={Baraka} alt=""/>
                 <h2>CHRISTINA SHUSHO</h2>
                 <p>
                 Christina Shusho's early life started in Kigoma, Tanzania. Her      
                  parents were very religious people and little Christina grew up in a strict religious education. 
                 </p>
                 {open && 
                   <p>
                    When the future gospel star was only fifteen years old, she had managed to find her own salvation which continues to this day.
                      Now, 
                     more than ten years have passed, since her first minute of glory. For more than ten years 
                     Christina Shusho pleases fans with her angelic voice and songs for the glory of God.
                   </p>
                 }
                 
                <label onClick={handleClose} for="check">Read More.......</label>
             </div>
             
        </div>
    </div>
  );
};

export default OurArtist;
