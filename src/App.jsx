import "./App.css";
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import WeekForecast from "./components/WeekForecast/WeekForecast";
import TodayHighlight from "./components/TodayHighlight/TodayHightlight";
import Footer from "./components/Footer";
import TemperatureChart from "./components/TemperatureChart";

function App() {
  const temperatureData = {
    labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
    values: [15, 18, 22, 20, 16],
  };

  const humidityData = {
    labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
    values: [60, 55, 50, 65, 70],
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-md z-50 border-b-2 border-b-slate-100">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold">Weather App</h1>
        </div>
      </header>

      <div className="flex flex-1 pt-16 justify-end ">
        <aside className="w-1/4 fixed left-0 h-full bg-slate-300">
          <SideBar
            city="Ha Noi"
            date="Monday"
            time="12:00"
            weatherIcon="./clear.png"
            temperature={32.9}
            weatherDescription="Clear Sky"
            humidity={60}
            windSpeed={15}
          />
        </aside>
        <main className="w-3/4 overflow-y-auto bg-gray-800 ">
          <SearchBar />
          <WeekForecast />
          <TodayHighlight />

          <div className="my-10 flex flex-wrap gap-6 ml-8">
            <div className="p-6 bg-white rounded-lg shadow-md w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Temperature Throughout the Day
              </h3>
              <TemperatureChart
                temperatureData={temperatureData}
                humidityData={humidityData}
              />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
