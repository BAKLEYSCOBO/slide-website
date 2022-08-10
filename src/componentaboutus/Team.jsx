import React from 'react';
import "./Team.css";
import Michael from "../image/Michael.jpg";
import Chris from "../image/CHRIS.jpg";
import Salvina from "../image/Salvina.jpg";
import Ochu from "../image/OCHU.jpg";
import Clara from "../image/Clara.jpg";
import Clatus from "../image/Gratius.jpg";
import Mussa from "../image/accountat.jpg";
import Gab from "../image/Gab.jpg";
import Billy from "../image/BILLY.jpg";
import {Instagram , Twitter , Email} from '@mui/icons-material';

const Team = () => {
  return (
    <div className='team'>
         <h1>Team</h1>

        <div className='team-cards'>
            
        <div className='cards'>

<div className='card'>

    <img src={Michael} alt=""/>
    <div className='card-content'>
      <h2>Michael Mligwa</h2>
        <p>CHIEF EXECUTIVE OFFICER</p>
        <div className='card-social'>
             <div className='icon'><Instagram/></div>
             <div className='icon'><Twitter/></div>
             <div className='icon'><Email/></div>
        </div>
    </div>
     
    </div>


    <div className='card'>
   
   <img src={Chris} alt=""/>
   <div className='card-content'>
     <h2>CHRIS TEBENDA</h2>
       <p>BUSINESS DEVELOPMENT</p>
       <div className='card-social'>
            <div className='icon'><Instagram/></div>
            <div className='icon'><Twitter/></div>
            <div className='icon'><Email/></div>
       </div>
   </div>
    
   </div>


   <div className='card'>
   
   <img src={Salvina} alt=""/>
   <div className='card-content'>
     <h2>SALNINA STAMBULI</h2>
       <p>PROJECT MANAGER</p>
       <div className='card-social'>
            <div className='icon'><Instagram/></div>
            <div className='icon'><Twitter/></div>
            <div className='icon'><Email/></div>
       </div>
   </div>
    
   </div>


   <div className='card'>
   
   <img src={Ochu} alt=""/>
   <div className='card-content'>
     <h2>OTHMAN SARIKO</h2>
       <p>CONTENT MANAGER</p>
       <div className='card-social'>
            <div className='icon'><Instagram/></div>
            <div className='icon'><Twitter/></div>
            <div className='icon'><Email/></div>
       </div>
   </div>
    
   </div>

   <div className='card'>
   
   <img src={Clara} alt=""/>
   <div className='card-content'>
     <h2>CLARA PREMSIDAH</h2>
       <p>ARTIST RELATIONSHIP MANAGER</p>
       <div className='card-social'>
            <div className='icon'><Instagram/></div>
            <div className='icon'><Twitter/></div>
            <div className='icon'><Email/></div>
       </div>
   </div>
    
   </div>


   <div className='card'>
   
   <img src={Clatus} alt=""/>
   <div className='card-content'>
     <h2>PASCHAL DONATUS</h2>
       <p>CREATIVE DESIGNER</p>
       <div className='card-social'>
            <div className='icon'><Instagram/></div>
            <div className='icon'><Twitter/></div>
            <div className='icon'><Email/></div>
       </div>
   </div>
    
   </div>

   <div className='card'>
   
   <img src={Mussa} alt=""/>
   <div className='card-content'>
     <h2>MUSSA JOSEPH</h2>
       <p>CONTENT MANAGER</p>
       <div className='card-social'>
            <div className='icon'><Instagram/></div>
            <div className='icon'><Twitter/></div>
            <div className='icon'><Email/></div>
       </div>
   </div>
    
   </div>


   <div className='card'>
   
   <img src={Gab} alt=""/>
   <div className='card-content'>
     <h2>GRABRIEL FEDALIS</h2>
       <p>CONTENT MANAGER</p>
       <div className='card-social'>
            <div className='icon'><Instagram/></div>
            <div className='icon'><Twitter/></div>
            <div className='icon'><Email/></div>
       </div>
   </div>
    
   </div>


   <div className='card'>
   
   <img src={Billy} alt=""/>
   <div className='card-content'>
     <h2>BILLY DANIEL</h2>
       <h6>SOCIAL MEDIA MANAGER</h6>
       <div className='card-social'>
            <div className='icon'><Instagram/></div>
            <div className='icon'><Twitter/></div>
            <div className='icon'><Email/></div>
       </div>
   </div>
    
   </div>




</div>
            
        </div> 

    
            

                 
                 
            

          


           


      




       
             
         
    </div>
  )
}

export default Team