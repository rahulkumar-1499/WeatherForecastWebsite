import { useEffect, useState } from "react";
import Weathercard from "./weathercard";
import "./styles.css";
export default function Temp() {
  const [svalue, setsvalue] = useState("pune");
  const [temp1, settemp] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        svalue +
        "&units=metric&appid=3899d36880239e687dc61e869cbe763e";
      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = { data };
      const { speed } = data.wind;
      const country = data.sys.country;
      const sunset = data.sys.sunset;
      console.log(data.sys.sunset);
      const Newinfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      };
      settemp(Newinfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={svalue}
            onChange={(e) => setsvalue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <Weathercard temp1={temp1} />
    </div>
  );
}
