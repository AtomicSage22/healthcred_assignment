import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const ClaimsStatus = ({ data }) => {
  const paidClaims = Object.values(data.claims_data).filter(claim => claim.claim_status === 'Paid').length;
  const pendingClaims = Object.values(data.claims_data).filter(claim => claim.claim_status === 'Pending').length;

  const chartData = {
    labels: ['Paid Claims', 'Pending Claims'],
    datasets: [
      {
        data: [paidClaims, pendingClaims],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default ClaimsStatus;
