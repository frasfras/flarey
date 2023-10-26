import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import VenueInfo from '../../components/VenueInfo'
import PubSubComponent from '../../components/PubSubComponent';

import * as Ably from 'ably';
import { AblyProvider, useChannel, usePresence } from 'ably/react';

export default function Venue() {
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <main className="flex-grow ml-64 relative">
         <div>
          <h1>FIND CONCERTS </h1>
          <p>This is the  Concert Venue details.</p>
        
        </div>
       
          {/* <Navbar /> */}
          <VenueInfo />
          <PubSubComponent />
          
    </main>
    </div>
    </>
  )
}