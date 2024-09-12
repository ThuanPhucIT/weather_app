import { CiSearch, CiGps } from "react-icons/ci";

const SearchBar = () => {
  const handleInputChange = (e) => {
    console.log(e.target.value); // Xử lý khi giá trị input thay đổi
  };

  const handleInputClick = () => {
    console.log("Input clicked"); // Xử lý khi click vào input
  };

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-800 shadow-lg">
      <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm max-w-3xl flex-grow">
        <CiSearch className="text-xl text-gray-600 ml-4" />
        <input
          type="text"
          placeholder="Search for a city..."
          onChange={handleInputChange}
          onClick={handleInputClick}
          className="border-none outline-none text-sm placeholder-gray-500 p-2 w-full rounded-full"
        />
      </div>

      {/* Vị trí hiện tại */}
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 ml-4 shadow-sm">
        <CiGps className="text-xl text-gray-600" />
        <p className="ml-2 text-gray-700">Your Location</p>
      </div>
    </div>
  );
};

export default SearchBar;
