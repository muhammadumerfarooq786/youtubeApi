import React from 'react';
import './style.css';

const videoItem=({video,onVideoSelect})=>{
  return(
     <div onClick={ ()=>onVideoSelect(video) } className="video-item item">
     <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
     <div className="content">
          <div className="header"><h4>{video.snippet.title}</h4></div>
          <div className="description"><p>{video.snippet.description}</p></div>
     </div>


     </div>

  );
};

export default videoItem;
