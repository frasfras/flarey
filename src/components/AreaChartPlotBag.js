import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const AreaChartPlot = () => {
    const data = [
    {
      id: 1,
      modelName: 'Medium-Priced Model',
      production: 500,
      price: 75.0, // Price in dollars
    },
    {
      id: 2,
      modelName: 'Deluxe Model',
      production: 300,
      price: 120.0, // Price in dollars
    },
    {
      id: 3,
      modelName: 'Economy Model',
      production: 800,
      price: 50.0, // Price in dollars
    },
    // Add more models as needed
  ]

  return (
    <>
      <ResponsiveContainer width="100%" height="100%" >
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="modelName" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
  export default AreaChartPlot;