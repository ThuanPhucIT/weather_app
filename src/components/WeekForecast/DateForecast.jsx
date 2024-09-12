import PropTypes from "prop-types";

const DateForecast = ({ day, icon, temperature, description }) => {
  return (
    <div className="bg-white w-32 mx-2 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center h-72">
      <p className="text-xl font-semibold text-gray-800 mb-2">{day}</p>
      <img
        src={icon}
        alt={description || "Weather icon"}
        className="w-16 h-16 mb-2 rounded-full border-2 border-gray-300 shadow-md"
      />
      <p className="text-3xl font-bold text-gray-800 mb-1">{temperature}</p>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

DateForecast.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DateForecast;
