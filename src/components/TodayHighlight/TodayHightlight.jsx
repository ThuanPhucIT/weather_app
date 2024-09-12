import Uvindex from "./UvIndex";
import WindStatus from "./WindStatus";
import Suntime from "./Suntime";
import Visibility from "./Visibility";
import AirQuality from "./AirQuality";
import Humidity from "./Humidity";

const TodayHighlight = () => {
  const uvIndex = 5; // Example UV index data
  const windData = { wind_spd: 15 }; // Example wind data
  const sunData = { sunrise: "6:30", sunset: "18:45" }; // Example sunrise/sunset data
  const visData = 9;
  const airQualityData = { aqi: 75 }; // Example air quality data
  const humidityData = { rh: 55 };

  return (
    <div className="w-full p-6 bg-gray-900 text-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Today Highlight</h2>
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md min-w-[180px] flex items-center justify-center">
          <Uvindex i={uvIndex} />
        </div>
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md min-w-[180px] flex items-center justify-center">
          <WindStatus mainData={windData} />
        </div>
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md min-w-[180px] flex items-center justify-center">
          <Suntime mainData={sunData} />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-6 mt-6">
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md min-w-[180px] flex items-center justify-center">
          <AirQuality mainData={airQualityData} />
        </div>
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md min-w-[180px] flex items-center justify-center">
          <Humidity mainData={humidityData} />
        </div>
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md min-w-[180px] flex items-center justify-center">
          <Visibility vis={visData} />
        </div>
      </div>
    </div>
  );
};

export default TodayHighlight;
