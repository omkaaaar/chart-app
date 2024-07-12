import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.xValues,
    datasets: [
      {
        label: 'Sample Data',
        data: data.yValues,
        borderColor: 'rgba(55,97,169,1)',
        backgroundColor: 'rgba(55,92,192,0.4)',
        pointBorderColor: 'rgba(55,92,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 7,
        pointHitRadius: 10,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return `(${context.label}, ${context.raw})`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
