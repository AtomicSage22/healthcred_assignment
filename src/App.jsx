import React, { useState, useEffect } from 'react';
import { fetchData } from './api';
import RepaymentOverview from './components/RepaymentOverview';
import ClaimsStatus from './components/ClaimsStatus';
import LimitUtilization from './components/LimitUtilization';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">HealthCRED Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Repayment Overview</h2>
            <RepaymentOverview data={data} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Claims Status</h2>
            <ClaimsStatus data={data} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Limit Utilization</h2>
            <LimitUtilization data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
