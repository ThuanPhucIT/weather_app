import PropTypes from "prop-types";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Uvindex = ({ i }) => {
  const uv = i || 0;
  const progress = (uv / 12) * 100;

  return (
    <div className="w-[240px] h-[240px] bg-gray-700 rounded-xl p-4 shadow-lg flex flex-col items-center justify-center text-white">
      <span className="text-xs text-yellow-300 mb-2">UV Index</span>
      <div className="flex items-center justify-center relative">
        <CircularProgressbar
          value={progress}
          text={`${uv.toFixed(1)}/12`}
          styles={{
            path: {
              stroke: "#ffce54",
              strokeLinecap: "round",
            },
            trail: {
              stroke: "#333333", // Sử dụng màu xám đậm cho trail
            },
            text: {
              fill: "#FFFF66", // Chữ màu xám đen
              fontSize: "1rem", // Kích thước chữ nhỏ hơn
              fontWeight: "bold",
            },
          }}
        />
      </div>
    </div>
  );
};

Uvindex.propTypes = {
  i: PropTypes.number, // Đảm bảo rằng 'i' là một số
};

export default Uvindex;
