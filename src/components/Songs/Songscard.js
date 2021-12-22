import React from 'react';
import './songs.css'

const Songscard = ({
    songName,
    songDesc,
    imageUrl,
    videoUrl,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
               
            </div>
            <div className='project-details-container'>
                <h2 className='project-heading'>{songName}</h2>
                <p className='project-details'>{songDesc}</p>
                <a href={videoUrl} className='project-yt-link'>
                    Watch More!
                </a>
            </div>
        </div>
    );
};

export default Songscard;