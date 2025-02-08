import React from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackgroundPlayer = ({movieId}) => {

     // Use the custom hook to fetch the teaser video
  const { teaserVideo, loading } = useMovieTrailer(movieId);
  return (
        loading ? 
        (
            <h3>Loading...</h3>
        ) :
        teaserVideo ? 
        (
            <div className="video-container">
            <iframe
              title={teaserVideo.name}
              src={`https://www.youtube.com/embed/${teaserVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${teaserVideo.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
    </div>
        ) :       <h3>No teaser available</h3>
    );
}

export default VideoBackgroundPlayer