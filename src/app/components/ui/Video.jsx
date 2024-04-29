import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <div className="video-container">
      <div className="video-overlay">
      </div>
      <video autoPlay loop muted className="background-video">
        <source src="https://qxztypvwedaskoflnbno.supabase.co/storage/v1/object/sign/broshure/1118592_4k_Transfer_Stream_1280x720.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicm9zaHVyZS8xMTE4NTkyXzRrX1RyYW5zZmVyX1N0cmVhbV8xMjgweDcyMC5tcDQiLCJpYXQiOjE3MTM5MzU4MDEsImV4cCI6MTc0NTQ3MTgwMX0.cPq1sOlHefMXh8-CBKn_dL61yJkagGNHV1GvtaADzIM&t=2024-04-24T06%3A15%3A58.716Z" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
