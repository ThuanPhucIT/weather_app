import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import PropTypes from "prop-types";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Visibility = ({ vis }) => {
  let visibilityCondition;
  let backgroundColor;
  let borderColor;

  if (vis >= 10) {
    visibilityCondition = "Clear";
    backgroundColor = "rgba(75, 192, 192, 0.4)"; // Clear
    borderColor = "rgba(75, 192, 192, 1)";
  } else if (vis >= 5) {
    visibilityCondition = "Hazy";
    backgroundColor = "rgba(54, 162, 235, 0.4)"; // Hazy
    borderColor = "rgba(54, 162, 235, 1)";
  } else if (vis >= 2) {
    visibilityCondition = "Foggy";
    backgroundColor = "rgba(255, 159, 64, 0.4)"; // Foggy
    borderColor = "rgba(255, 159, 64, 1)";
  } else {
    visibilityCondition = "Dense Fog";
    backgroundColor = "rgba(255, 99, 132, 0.4)"; // Dense Fog
    borderColor = "rgba(255, 99, 132, 1)";
  }

  const data = {
    labels: ["Visibility"],
    datasets: [
      {
        label: `Visibility (${visibilityCondition})`,
        data: [vis],
        backgroundColor,
        borderColor,
        borderWidth: 1,
        barThickness: 30, // Adjust bar thickness
        minBarLength: 3,
      },
    ],
  };

  return (
    <div className="w-[240px] h-[240px] bg-gray-800 rounded-lg p-4 shadow-lg ">
      <span className="text-sm text-white">Visibility</span>

      <Bar
        className="mt-10 h-32"
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "white",
              },
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => `Visibility: ${tooltipItem.raw} Km`,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "white",
                stepSize: 2,
              },
              grid: {
                color: "rgba(255, 255, 255, 0.2)",
              },
            },
            x: {
              ticks: {
                color: "white",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.2)",
              },
            },
          },
        }}
      />
    </div>
  );
};

Visibility.propTypes = {
  vis: PropTypes.number.isRequired,
};

export default Visibility;
