'use client'
// VenueInfo.js
import './style.css';
import React, { useState } from 'react';
import venuesData from './venuesData';

const VenueInfo = () => {
  const [selectedVenue, setSelectedVenue] = useState(venuesData[0]); // Initialize with the first venue
  const [showImage,setShowImage] = useState(false);

  const handleVenueChange = (event) => {
    const selectedVenueName = event.target.value;
    const venue = venuesData.find((v) => v.name === selectedVenueName);
    setSelectedVenue(venue);
  };

 const toggleImage = () => {
    // setShowImage((prevState) => ({
    //   showImage: !prevState.showImage,
    // }));
    // if (showImage==false){
    //   setShowImage(true)
    // };
    // if (showImage==true){
    //   setShowImage(false)
    // };
    
  };
  

  return (
    <div>
      <h1>Concert Venue Details</h1>
      <select onChange={handleVenueChange} value={selectedVenue.name}>
        {venuesData.map((venue) => (
          <option key={venue.name} value={venue.name}>
            {venue.name}
          </option>
        ))}
      </select>
      <div>
        <h2>{selectedVenue.name}</h2>
        <p>{selectedVenue.details}</p>
        <button className='btn btn-success' onClick={toggleImage}>
          {showImage ? 'Start Image' : 'Stop Image'}
        </button>
        {showImage && (
         <image></image>
        )}
         <img src={selectedVenue.image} alt={`${selectedVenue.name} Image`} />
      </div>
    </div>
  );
};

export default VenueInfo;
