'use client'
import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import { useChannel, usePresence } from "ably/react";
import { MouseEventHandler,  useState } from 'react'

export default function PubSubComponent(){
   
    const optionalClientId = "optionalClientId";
    //client
    const client = Ably.Realtime.Promise({ authUrl: 'https://fantastic-taiyaki-684bec.netlify.app/api/ably-token-request?clientId=${optionalClientId}' });

    return (
        <AblyProvider client={ client }>
            <div className="flex flex-row justify-center">
             <div className="flex flex-col justify-start items-start gap-10">
            <Messages /> 
             </div>      
            </div>
        </AblyProvider>
      )
}

function Messages() {
    // const [messages, updateMessages] = useState(['hello']);
     
      // const channel = client.channels.get("some-channel-name");

    const { channel }  = useChannel("getting-started", (message) => {
        console.log(message);
    });

    const [messageText, setMessageText] = useState('A message');
   const handleSubmitClient  = (event) => {
      console.log('submit');
      if(channel === null) return
      channel.publish('update-from-client', {text: `${messageText} @ ${new Date().toISOString()}`});
      channel.publish("test-message", { text: "looks great text" });
    }
  
  
    
    
    return (
      <>
        <div className="flex flex-col justify-start items-start gap-4 h-[138px]">
        <div className="font-manrope text-sm min-w-[113px] whitespace-nowrap text-black text-opacity-100 leading-4 uppercase tracking-widest font-medium">
          <span className="uppercase">Message text</span>
        </div>
        <input className="font-manrope px-3 rounded-md items-center text-base min-w-[720px] w-[752px] whitespace-nowrap text-zinc-800 text-opacity-100 leading-6 font-light h-12 border-zinc-300 border-solid border bg-neutral-100" value={messageText}  onChange={e => setMessageText(e.target.value)} />
        <div className="flex flex-row justify-start items-start gap-4 w-[368px]">
          <div className="flex justify-center items-center rounded-md w-44 h-10 bg-black">
            <div className="font-manrope text-base min-w-[136px] whitespace-nowrap text-white text-opacity-100 leading-4 font-medium">
              <button onClick={handleSubmitClient}>Publish from Client</button>
            </div>
          </div>
          <div className="flex justify-center items-center rounded-md w-44 h-10 bg-black">
            <div className="font-manrope text-base min-w-[136px] whitespace-nowrap text-white text-opacity-100 leading-4 font-medium">
              <button onClick={handleSubmitClient}>Publish from Server</button>
            </div>
          </div>
        </div>
      </div>
      </>

    )
  }
  
 