import { useState } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS cho DatePicker

const Header = () => {
  const [startDate, setStartDate] = useState(new Date()); // State để lưu trữ ngày đã chọn

  return (
    <div className="flex space-x-4 p-4 items-center bg-gray-100 rounded-lg shadow-lg">
      <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200">
        Today
      </button>

      <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200">
        Tomorrow
      </button>

      <div className="relative">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)} // Cập nhật ngày khi người dùng chọn
          className="border rounded-lg p-2 w-48 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200"
          dateFormat="MMMM d, yyyy" // Định dạng ngày
          popperPlacement="bottom-end" // Vị trí của popper (thanh chọn ngày)
          customInput={<CustomInput />} // Tùy chỉnh input nếu cần
        />
      </div>
    </div>
  );
};

// Tùy chỉnh Input cho DatePicker
const CustomInput = ({ value, onClick }) => (
  <button
    className="border rounded-lg px-4 py-2 text-gray-800 bg-white shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200"
    onClick={onClick}
  >
    {value || "Select Date"}
  </button>
);

CustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Header;
