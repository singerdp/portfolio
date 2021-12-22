import React from 'react';
import { SongsData } from './SongsData'
import Header from '../Header/Header'
import Songscard from './Songscard';
import './songs.css'
const Songs = () => {
     return (

          <div className="section-container">
               <Header className="head"
                    heading='Songs'
                    details="Isaiyaal vasamaaga Idhayamedhu !🎤"
               />
               <div className='project-cards-container'>
                    {SongsData.map(
                         ({
                              songName,
                              songDesc,
                              imageUrl,
                              videoUrl,
                         }) => {
                              return (
                                   <Songscard
                                        songName={songName}
                                        songDesc={songDesc}
                                        imageUrl={imageUrl}
                                        videoUrl={videoUrl}
                                   />
                              );
                         }
                    )}
               </div>
          </div>
     );
};

export default Songs;