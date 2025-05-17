import React, { useRef, useState } from 'react';
import './Video.css'; // Import the CSS file

const Video = () => {
  const videoRef = useRef(null); // Create a ref for the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play the video if it's paused
        setIsPlaying(true); // Update state to indicate video is playing
      } else {
        videoRef.current.pause(); // Pause the video if it's playing
        setIsPlaying(false); // Update state to indicate video is paused
      }
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundImage: isPlaying ? 'none' : 'url(assets/images/b2.jpg)', // Hide background image when video is playing
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the background image
      }}
    >
      <video
        ref={videoRef} // Attach the ref to the video element
        src="assets/video/ab.mp4" // Example video URL
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6 // Adjust opacity here (0 to 1)
        }}
        onClick={handleVideoClick} // Add click handler
      />
      {/* Play button overlay */}
      {!isPlaying && (
        <div
          onClick={handleVideoClick} // Play video on click
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            color: 'white',
            padding: '20px',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 2, // Ensure the button is above the video
          }}
        >
          Play Video
        </div>
      )}
      {/* You can add other content here, like overlays or text */}
      <div className="h1-container">
        <h1 style={{ margin: '260px 0' }}>
          "Experience breathtaking drone bird's-eye views that capture every detail from above. Elevate your perspective with stunning aerial imagery!"
        </h1>
      </div>
    </div>
  );
};

export default Video;