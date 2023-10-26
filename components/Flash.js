'use client'
import React, { Component } from 'react';
import './App.css';
//  import PubSubComponent from '@/components/PubSubComponent';

class Flash extends Component {
  constructor() {
    super();
    this.state = {
      showImage: false,
    };
  }

  toggleImage = () => {
    this.setState((prevState) => ({
      showImage: !prevState.showImage,
    }));
  };

  render() {
    const { showImage } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleImage}>
          {showImage ? 'Hide Image' : 'Show Image'}
        </button>
      {/* <PubSubComponent /> */}
        {showImage && (
          <div className="flashing-image">
            <img
              src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/411/710/datas/original.png"
              alt="Flashing Image"
              width="200"
              height="200"
            />
            <img
              src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/411/710/datas/original.png"
              alt="Flashing Image"
              width="200"
              height="200"
            />
            {/* https://v5.airtableusercontent.com/v1/22/22/1697716800000/oW5J7nubFCfj8WgUDRQqZA/97wgB5bUkmZlv48t-omGbDau277ELq6gmM9QcrJk8KNs7V5UGqcTUrpfY0Dv5Px8JE3Gu5OgeKmzERdwnUAXFA/ChGL1pznE7sZETV5gDrJeLvsbaOfEFL7KkHpIx-dT94 */}
          </div>
        )}
      </div>
    );
  }
}

export default Flash;
