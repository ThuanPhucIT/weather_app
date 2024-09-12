import PropTypes from "prop-types";
import { FaTint, FaWater } from "react-icons/fa";

const Humidity = ({ mainData }) => {
  const humid = mainData.rh;

  let humidLevel;
  let levelColor;

  if (humid >= 70) {
    humidLevel = "Poor High";
    levelColor = "bg-red-500";
  } else if (humid >= 60) {
    humidLevel = "Fair";
    levelColor = "bg-yellow-500";
  } else if (humid >= 30) {
    humidLevel = "Normal";
    levelColor = "bg-green-500";
  } else {
    humidLevel = "Poor Low";
    levelColor = "bg-blue-500";
  }

  return (
    <div className="w-[300px] h-[240px] bg-gray-800 rounded-2xl p-4 shadow-lg flex flex-col items-center justify-between">
      <span className="text-white text-lg font-semibold mb-4">Humidity</span>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <h1 className="text-white text-4xl font-bold">{humid}%</h1>
          <div className={`ml-2 text-4xl ${levelColor}`}>
            {humidLevel === "Normal" ? <FaWater /> : <FaTint />}
          </div>
        </div>
        <div className="relative w-full h-4 bg-gray-600 rounded-full">
          <div
            className={`absolute top-0 left-0 h-full ${levelColor} rounded-full`}
            style={{ width: `${humid}%` }}
          ></div>
        </div>
        <p className="text-white mt-2">{humidLevel}</p>
      </div>
    </div>
  );
};

Humidity.propTypes = {
  mainData: PropTypes.shape({
    rh: PropTypes.number.isRequired,
  }).isRequired,
};

export default Humidity;
