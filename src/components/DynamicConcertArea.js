"use client";
import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Ably from "ably";

const apiKey = "rPf5Qg.Otq9Cw:LV2j8UZTe_p3ZTrZB2BnNfJDBzClhO0JX9tGJO7pldQ";
const channelName = "voting-channel";

const initialPetData = [
  { name: "Concert 1", tickets: 100, sales: 50 },
  { name: "Concert 2", tickets: 150, sales: 70 },
  { name: "Concert 3", tickets: 50, sales: 40 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658"];

const DynamicConcertArea = () => {
  const [petData, setPetData] = useState(initialPetData);
  const [newConcertName, setNewConcertName] = useState("");

  useEffect(() => {
    const ably = new Ably.Realtime({ key: apiKey });
    const channel = ably.channels.get(channelName);

    // Subscribe to the Ably channel for real-time updates
    channel.subscribe((message) => {
      const updatedPetData = JSON.parse(message.data);
      setPetData(updatedPetData);
    });

    return () => {
      // Cleanup when the component unmounts
      ably.close();
    };
  }, []);

  const handleIncrementCount = (petName) => {
    // Increment the count for the selected pet and publish the updated data to Ably
    const updatedPetData = petData.map((pet) => (pet.name === petName ? { ...pet, sales: pet.sales + 2 } : pet));

    setPetData(updatedPetData);

    // Publish the updated data to Ably
    const ably = new Ably.Realtime({ key: apiKey });
    const channel = ably.channels.get(channelName);
    channel.publish("update", JSON.stringify(updatedPetData));

    // Close the Ably connection
    ably.close();
  };

  const handleAddConcert = () => {
    if (newConcertName.trim() !== "") {
      const updatedPetData = [...petData, { name: newConcertName, tickets: 10, sales: 0 }];
      setPetData(updatedPetData);
      setNewConcertName("");

      // Publish the updated data to Ably
      const ably = new Ably.Realtime({ key: apiKey });
      const channel = ably.channels.get(channelName);
      channel.publish("update", JSON.stringify(updatedPetData));

      // Close the Ably connection
      ably.close();
    }
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Dynamic Ticket Chart</h1>

      <AreaChart width={430} height={230} data={petData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="tickets" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="sales" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>

      <div>
        {petData.map((pet) => (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" key={pet.name} onClick={() => handleIncrementCount(pet.name)}>
            +1 {pet.name}
          </button>
        ))}
      </div>
      {/* <div>
        <input type="text" placeholder="New pet name" value={newConcertName} onChange={(e) => setNewConcertName(e.target.value)} />
        <button onClick={handleAddConcert}>Add Concert</button>
      </div> */}
    </div>
  );
};

export default DynamicConcertArea;
