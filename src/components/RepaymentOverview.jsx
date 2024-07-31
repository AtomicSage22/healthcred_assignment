import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const RepaymentOverview = ({ data }) => {
  const chartData = {
    labels: ['Amount Repaid', 'Amount to be Repaid', 'Total Due'],
    datasets: [
      {
        label: 'Amount (₹)',
        data: [
          data.amount_repaid_to_date,
          data.amount_to_be_repaid_on_upcoming_date,
          data.total_due,
        ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default RepaymentOverview;
