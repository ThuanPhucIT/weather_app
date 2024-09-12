import PropTypes from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa";

const SunTime = ({ mainData }) => {
  const rise = mainData.sunrise;
  const set = mainData.sunset;

  return (
    <div className="w-[240px] h-[240px] bg-gray-700 rounded-2xl p-3 shadow-lg flex flex-col items-center">
      <span className=" text-[16px]  text-center text-yellow-200">
        Sunrise & Sunset
      </span>
      <div className="flex flex-col justify-evenly items-start p-2 gap-4 mt-4 h-[76%]">
        <div className="flex items-center gap-3">
          <FaSun className="text-yellow-300 text-3xl" />
          <span className="font-Popin text-lg font-medium text-yellow-300">
            {rise} AM
          </span>
        </div>
        <div className="flex items-center gap-3">
          <FaMoon className="text-indigo-300 text-3xl" />
          <span className="font-Popin text-lg font-medium text-indigo-300">
            {set} PM
          </span>
        </div>
      </div>
    </div>
  );
};

SunTime.propTypes = {
  mainData: PropTypes.shape({
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
  }).isRequired,
};

export default SunTime;
