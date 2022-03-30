import { useEffect, useState } from "react";
const Weathercard = ({ temp1 }) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
  } = temp1;
  const [weatherstate, setmood] = useState("");
  useEffect(() => {
    switch (weathermood) {
      case "Clouds":
        setmood("wi wi-day-cloudy");
        break;
      case "Haze":
        setmood("wi wi-fog");
        break;
      case "Clear":
        setmood("wi wi-day-sunny");
        break;
      default:
        setmood("wi wi-day-cloudy");
        break;
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let time = date.getHours() + ":" + date.getMinutes();
  console.log(sunset);
  return (
    <article className="widget">
      <div className="weatherIcon">
        <i className={weatherstate}></i>
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}deg</span>
        </div>
        <div className="description">
          <div className="weatherCondition">Sunny</div>
          <div className="place">
            {name},{country}
          </div>
        </div>
      </div>

      <div className="date">{new Date().toLocaleString()}</div>
      <div className="extra-temp">
        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className="wi wi-sunset"></i>
            </p>
            <p className="extra-info-leftside">
              {time}
              <br />
              Sunset
            </p>
          </div>
        </div>

        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className="wi wi-humidity"></i>
            </p>
            <p className="extra-info-leftside">
              {humidity}
              <br />
              Humidity
            </p>
          </div>
        </div>

        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className="wi wi-rain"></i>
            </p>
            <p className="extra-info-leftside">
              {pressure}
              <br />
              Pressure
            </p>
          </div>
        </div>

        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className="wi wi-strong-wind"></i>
            </p>
            <p className="extra-info-leftside">
              {speed}
              <br />
              Speed
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Weathercard;
