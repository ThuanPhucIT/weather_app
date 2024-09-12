const TodayForecast = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString(); // Định dạng ngày
  const formattedTime = date.toLocaleTimeString(); // Định dạng giờ

  return (
    <div className="w-fit bg-white p-5 rounded-lg shadow-xl flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Today’s Forecast
      </h2>
      <div className="flex items-center mb-4">
        <img
          src="/clear.png"
          alt="clear weather"
          className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
        />
        <div className="ml-4 flex flex-col items-center">
          <p className="text-4xl font-semibold text-gray-800 mb-1">25°C</p>
          <p className="text-lg font-medium text-gray-600">Clear Sky</p>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-between text-sm text-gray-700">
        <div className=" mb-1">
          <p className="mb-1">
            Date:{" "}
            <span className="font-medium text-gray-800">{formattedDate}</span>
          </p>
          <p className="mb-1">
            Time:{" "}
            <span className="font-medium text-gray-800">{formattedTime}</span>
          </p>
        </div>

        <div className=" mb-1 ml-4">
          <p className="mb-1">
            Real Feel: <span className="font-medium text-gray-800">27°C</span>
          </p>
          <p className="mb-1">
            Wind: <span className="font-medium text-gray-800">5 km/h</span>
          </p>
          <p className="mb-1">
            Pressure:{" "}
            <span className="font-medium text-gray-800">1015 hPa</span>
          </p>
          <p className="mb-1">
            Humidity: <span className="font-medium text-gray-800">60%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
