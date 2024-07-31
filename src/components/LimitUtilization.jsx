import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const LimitUtilization = ({ data }) => {
  const chartData = {
    labels: ['Utilized', 'Unutilized'],
    datasets: [
      {
        data: [data.current_limit_utilised_percentage, data.current_unutilised_funds_percentage],
        backgroundColor: ['rgba(255, 159, 64, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default LimitUtilization;
