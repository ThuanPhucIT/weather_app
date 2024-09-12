import DateForecast from "./DateForecast";
import Header from "./Header";
import TodayForecast from "./TodayForecast";
import { weeklyForecast } from "./data";

const WeekForecast = () => {
  return (
    <div className="p-6 bg-gray-800 h=fit w-full">
      <Header />
      <div className="mt-4 w-full overflow-x-auto">
        <div className="flex gap-1 lg:gap-1 items-center w-full mb-2">
          <div className="flex-shrink-0">
            <TodayForecast />
          </div>
          {weeklyForecast.map((forecast, index) => (
            <div key={index} className="flex-shrink-0">
              <DateForecast
                day={forecast.day}
                icon={forecast.icon}
                temperature={forecast.temperature}
                description={forecast.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekForecast;
