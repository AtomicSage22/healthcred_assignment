import React, { useEffect, useState } from 'react';
import { fetchData } from './api';
// import Chart from 'chart.js/auto'; // or Recharts

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        console.log('Data:', result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">HealthCRED Dashboard</h1>
      {/* Display data and charts */}
    </div>
  );
}

export default App;
