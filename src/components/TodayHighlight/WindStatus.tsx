import React from 'react'; // Ensure React is imported
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

// Đăng ký các thành phần của biểu đồ
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WindStatus = ({ mainData }) => {
  const windSpeed = mainData.wind_spd || 0;
  
  // Tạo dữ liệu cho biểu đồ
  const data = {
    labels: ['Wind Speed'],
    datasets: [
      {
        label: 'Km/h',
        data: [windSpeed],
        backgroundColor: '#4db6ac',
        borderColor: '#00796b',
        borderWidth: 1,
      },
    ],
  };

  // Tùy chỉnh biểu đồ
  const options = {
    indexAxis: 'y' as const, // Ensure type is set correctly
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} km/h`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#fff',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="w-[300px] h-[240px] bg-gray-700 rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center text-white">
      <span className="text-sm text-green-300 mb-2">Wind Status</span>
      <div className="w-full h-full">
        <Bar data={data} options={options} />
      </div>
      <span className="text-lg text-green-300 font-semibold mt-2">{windSpeed.toFixed(1)} km/h</span>
    </div>
  );
};

WindStatus.propTypes = {
  mainData: PropTypes.shape({
    wind_spd: PropTypes.number,
  }).isRequired,
};

export default WindStatus;
