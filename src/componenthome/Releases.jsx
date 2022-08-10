import React from 'react';
import './Releases.css';
import Video from '../image/video.png';
import Artist from '../image/artist.png';

const Releases = () => {
  return (

    <div className='releases'>

       <div className='content-img'>
           <img className='video'  src={Video} alt=""/>
       </div>

       <div className='repeat-img'>
          <img  src={Artist} alt=""/>
       </div>

    </div>
  )
}

export default Releases