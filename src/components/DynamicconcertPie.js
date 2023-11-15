"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Ably from "ably";

const apiKey = "rPf5Qg.Otq9Cw:LV2j8UZTe_p3ZTrZB2BnNfJDBzClhO0JX9tGJO7pldQ_";
const channelName = "voting-channel";

const initialconcertData = [
  { name: "Very Good", count: 10 },
  { name: "Good", count: 15 },
  { name: "Below Par", count: 5 },
  { name: "Happy", count: 5 },
];

const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8800"];

const DynamicconcertPie = () => {
  const [concertData, setconcertData] = useState(initialconcertData);

  useEffect(() => {
    const ably = new Ably.Realtime({ key: apiKey });
    const channel = ably.channels.get(channelName);

    // Subscribe to the Ably channel for real-time updates
    channel.subscribe((message) => {
      const updatedconcertData = JSON.parse(message.data);
      setconcertData(updatedconcertData);
    });

    return () => {
      // Cleanup when the component unmounts
      ably.close();
    };
  }, []);

  const handleIncrementCount = (concertName) => {
    // Increment the count for the selected concert and publish the updated data to Ably
    const updatedconcertData = concertData.map((concert) => (concert.name === concertName ? { ...concert, count: concert.count + 1 } : concert));

    setconcertData(updatedconcertData);

    // Publish the updated data to Ably
    const ably = new Ably.Realtime({ key: apiKey });
    const channel = ably.channels.get(channelName);
    channel.publish("update", JSON.stringify(updatedconcertData));

    // Close the Ably connection
    ably.close();
  };

  return (
    <div>
      <h5 style={{ color: "green" }}>Rate the Concert</h5>
      <PieChart width={400} height={260}>
        <Pie data={concertData} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
          {concertData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <div>
        {concertData.map((concert) => (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" key={concert.name} onClick={() => handleIncrementCount(concert.name)}>
            +1 {concert.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DynamicconcertPie;
