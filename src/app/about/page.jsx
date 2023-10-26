
// pages/about.js
import VenueInfo from 'VenueInfo'
import Sidebar from 'Sidebar'
import Link from 'next/link';

export default function About(){
  return (
    <main>
      <Sidebar />
        <div>
          <h1></h1>
          <p>This is  Concert Venue app</p>
        
        </div>
        <section className="flex my-4 px-4 gap-2">
          <div className=" w-1/3 h-[250px] bg-white-700 rounded">
          <h1>About Us</h1>
           <p>This is the About Concert Venue .</p>
          </div>
          <div className=" w-1/3 h-[250px] bg-white-700 rounded"><VenueInfo /></div>
          <div className=" w-1/3 h-[250px] bg-gray-700 rounded"></div>
        </section>
        </main>
      );
}
   
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>This is the About page Concert Venue details.</p>
//       <Link href="/">
//         <a>Go back to the homepage</a>
//       </Link>
//     </div>
//   );
// };


