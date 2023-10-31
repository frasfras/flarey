'use client'
// VenueInfo.js
import './style.css';
import React, { useState } from 'react';
import venuesData from './venuesData';

const VenueInfo = () => {
  const [selectedVenue, setSelectedVenue] = useState(venuesData[0]); // Initialize with the first venue
  const [showImage,setShowImage] = useState(true);

  const handleVenueChange = (event) => {
    const selectedVenueName = event.target.value;
    const venue = venuesData.find((v) => v.name === selectedVenueName);
    setSelectedVenue(venue);
  };

 const toggleImage = () => {
    // setShowImage((prevState) => ({
    //   showImage: !prevState.showImage,
    // }));
     if (showImage==false){
       setShowImage(true)
     };
     if (showImage==true){
       setShowImage(false)
     };
    
  };
  

  return (
    <div>
      <button className="btn btn-success" primary onClick={toggleImage}>
        {showImage ? <h4>**Hide Venue**</h4> : <h4>*Show Venue*</h4>}
      </button>
      {showImage &&  <h1 style={{ color: "red" }}>Concert Venue Details</h1>}
      {showImage && (
      <select onChange={handleVenueChange} value={selectedVenue.name}>
        {venuesData.map((venue) => (
          <option key={venue.name} value={venue.name}>
            {venue.name}
          </option>
        ))}
      </select>
       )}  
      <div>
        <h2>{selectedVenue.name}</h2>
        <p>{selectedVenue.details}</p>
        <button className='btn btn-success' onClick={toggleImage}>
          {/*{showImage ? 'Start Image' : 'Stop Image'} */}
        </button>
        {showImage && (
         <image></image>
        )}
         <img style={{ width: 500, height: 390 }} src={selectedVenue.image} alt={`${selectedVenue.name} Image`} />
      </div>
    </div>
  );
};

export default VenueInfo;
