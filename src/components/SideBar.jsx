import PropTypes from "prop-types";

const SideBar = ({
  city,
  date,
  time,
  weatherIcon,
  temperature,
  weatherDescription,
  humidity,
  windSpeed,
}) => {
  return (
    <div className="w-full h-full p-6 bg-gray-800 text-white flex flex-col items-start border-red-50 border-r-2">
      {/* City Title */}
      <p className="text-4xl font-extrabold mb-4">{city}</p>

      {/* Date and Time */}
      <div className="flex items-center mb-6">
        <p className="text-lg font-semibold mr-4">{date}</p>
        <p className="text-lg">{time}</p>
      </div>

      {/* Separator Line */}
      <div className="w-full h-0.5 bg-gray-600 mb-6"></div>

      {/* Weather Information */}
      <div className="flex items-center mb-6">
        <img
          src={weatherIcon}
          alt="Weather icon"
          className="h-32 w-32 object-cover rounded-lg border-2 border-gray-700 shadow-md"
        />
        <div className="flex flex-col ml-4">
          <p className="text-5xl font-bold mb-2">{temperature}°C</p>
          <p className="text-lg">{weatherDescription}</p>
        </div>
      </div>

      {/* Additional Weather Details */}
      <div className="w-full flex flex-col space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Humidity:</span>
          <span>{humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Wind Speed:</span>
          <span>{windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
};

export default SideBar;
