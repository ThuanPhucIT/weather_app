import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const TemperatureChart = ({ temperatureData, humidityData }) => {
  if (!temperatureData || !humidityData) {
    return <p>Loading...</p>; // Hoặc một thông báo lỗi tùy chỉnh
  }

  const chartData = {
    labels: temperatureData.labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatureData.values,
        fill: false,
        borderColor: "#FF5733", // Màu cho đường nhiệt độ
        tension: 0.1,
      },
      {
        label: "Humidity (%)",
        data: humidityData.values,
        fill: false,
        borderColor: "#33B5FF", // Màu cho đường độ ẩm
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

TemperatureChart.propTypes = {
  temperatureData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  humidityData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default TemperatureChart;
