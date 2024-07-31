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
    <div className="min-h-screen bg-gray-100 py-10 ">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">HealthCRED Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h1 className="text-3xl font-bold text-gray-700">{data.hospital_name}</h1>
                <p className="text-lg text-gray-700">Repayment Tenure: {data.repayment_tenure}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Key Metrics</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Total Due: ${data.total_due}</li>
                        <li>Amount Repaid: ${data.repayments_amount}</li>
                        <li>Upcoming Repayment Date: {data.upcoming_repayment_date}</li>
                        <li>Current Limit Utilised: ${data.current_limit_utilised}</li>
                        <li>Current Unutilised Funds: ${data.current_unutilised_funds}</li>
                    </ul>
                </div> */}
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
