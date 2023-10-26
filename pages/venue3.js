'use client'
// pages/about.js
import VenueInfo from '../src/components/VenueInfo'
import UserTable from '../src/components/UserTable';
import Link from 'next/link';

const Venue = () => {
  return (
    <div>
      <h1>Venue </h1>
      
      <p>This is the venue page 3 Concert Venue details.</p>
      {/* <Link href="/">
        <a>Go back to the homepage</a>
      </Link> */}
      <VenueInfo />
      <UserTable />
    </div>
  );
};

export default Venue;