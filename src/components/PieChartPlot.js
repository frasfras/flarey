'use client'
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import * as Ably from 'ably';

// const myId = "id-" + Math.random().toString(36).substr(2, 16);
const apiKey = 'rPf5Qg.Otq9Cw:LV2j8UZTe_p3ZTrZB2BnNfJDBzClhO0JX9tGJO7pldQ';
// Ably Instance
const ably = new Ably.Realtime({
    key: apiKey,
    // clientId: myId,
    // echoMessages: false
});

const myVoting =  ably.channels.get("vote-channel");
myVoting.subscribe ( (msg) =>{
    console.log(msg.data)
});

var option1 =0;
var option2 =0;
var option3 =0;
var option4 =0;

const PieChartPlot = () => {
    const colors = [
        "#8884d8",
        "#FA8072",
        "#AF69EE",
        "#3DED97",
        "#3AC7EB",
        "#F9A603",
      ];

    const data = [
      {
        name: "Twitter",
        value: 200400,
      },
      {
        name: "Facebook",
        value: 205000,
      },
      {
        name: "Instagram",
        value: 23400,
      },
      {
        name: "Snapchat",
        value: 20000,
      },
      {
        name: "LinkedIn",
        value: 29078,
      },
      {
        name: "YouTube",
        value: 18900,
      },
    ];

    const [results, setResults] = useState({});
    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </>
      );
  }
  export default PieChartPlot; 