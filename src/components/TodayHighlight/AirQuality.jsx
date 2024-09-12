import PropTypes from "prop-types";

const AirQuality = ({ mainData }) => {
  const aq = mainData.aqi;
  let aqLevel;
  let aqColor;

  if (aq > 0 && aq <= 53) {
    aqLevel = "Good";
    aqColor = "#00e400"; // Xanh lá cây
  } else if (aq > 53 && aq <= 100) {
    aqLevel = "Satisfactory";
    aqColor = "#ffff00"; // Vàng
  } else if (aq > 100 && aq <= 200) {
    aqLevel = "Moderate";
    aqColor = "#ff7e00"; // Cam
  } else if (aq > 200 && aq <= 300) {
    aqLevel = "Poor";
    aqColor = "#ff0000"; // Đỏ
  } else if (aq > 300 && aq <= 400) {
    aqLevel = "Very Poor";
    aqColor = "#99004c"; // Tím
  } else if (aq > 400 && aq <= 500) {
    aqLevel = "Severe";
    aqColor = "#7e0023"; // Đỏ sẫm
  }

  const aqBall = (aq / 500) * 100; // Tính tỷ lệ phần trăm

  return (
    <div className="w-[240px] h-[240px] bg-gray-800 rounded-2xl p-3 shadow-lg">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">Air Quality</span>
      <div className="h-[80%] flex flex-col justify-between items-start gap-4 pl-3 relative">
        <h1 className="font-Popin text-5xl font-medium mt-10 text-white">
          {aq}
        </h1>
        <div className="w-full flex gap-3 items-center mt-1">
          <div
            className="w-[30px] h-[30px] rounded-full"
            style={{ backgroundColor: aqColor }}
          ></div>
          <p className="text-[15px] font-Popin font-medium text-white">
            {aqLevel}
          </p>
        </div>
        <div className="levelbar absolute w-8 h-[80%] bg-transparent border-2 right-2 top-4 rounded-[16px] py-1 px-[3px]">
          <div
            className="w-6 h-6 rounded-[50%] absolute"
            style={{ backgroundColor: aqColor, bottom: `${aqBall}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

AirQuality.propTypes = {
  mainData: PropTypes.shape({
    aqi: PropTypes.number.isRequired,
  }).isRequired,
};

export default AirQuality;
