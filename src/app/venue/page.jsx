import Sidebar from './Sidebar'
import Navbar from "./Navbar";
import VenueInfo from "./VenueInfo";
import Chat from "./Chat";

import * as Ably from "ably";
import { AblyProvider, useChannel, usePresence } from "ably/react";

export default function Venue() {
  return (
    <>
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-grow ml-64 relative">
          <div>
            <h1 style={{ color: "green" }}>FIND CONCERTS </h1>
            <p>This is the Concert Venue details.</p>
            <a href="/venue" target="_blank" rel="noopener noreferrer">
              Share this venue on new tab
            </a>
          </div>

          <section className="flex my-4 px-4 gap-2">
            <div className=" w-1/3 h-[250px] bg-white-700 rounded">
              <VenueInfo />
            </div>
            <div className=" w-1/3 h-[250px] bg-white-700 rounded">
              {" "}
              <Chat />
            </div>
            <div className=" w-1/3 h-[250px] bg-white-700 rounded"></div>
          </section>
        </main>
      </div>
    </>
  );
}

