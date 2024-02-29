import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const date = new Date();
console.log(date);
const api = "XIQ+SEiBx8vWXWIg85F2TA==oveFxj653FppYBk8";

const getAqiClassName = (aqiValue) => {
  if (aqiValue >= 0 && aqiValue <= 50) {
    return "good-aqi";
  } else if (aqiValue > 50 && aqiValue <= 100) {
    return "satisfactory-aqi";
  } else if (aqiValue > 100 && aqiValue <= 200) {
    return "moderate-aqi";
  } else if (aqiValue > 200 && aqiValue <= 300) {
    return "poor-aqi";
  } else if (aqiValue > 300 && aqiValue <= 400) {
    return "verypoor-aqi";
  } else {
    return "very-unhealthy-aqi";
  }
};
const getAqiContainerClassName = (aqiValue) => {
  if (aqiValue >= 0 && aqiValue <= 50) {
    return "good-aqi-c";
  } else if (aqiValue > 50 && aqiValue <= 100) {
    return "satisfactory-aqi-c";
  } else if (aqiValue > 100 && aqiValue <= 200) {
    return "moderate-aqi-c";
  } else if (aqiValue > 200 && aqiValue <= 300) {
    return "poor-aqi-c";
  } else if (aqiValue > 300 && aqiValue <= 400) {
    return "verypoor-aqi-c";
  } else {
    return "very-unhealthy-aqi-c";
  }
};
export default function Aqi() {
  const [data, setData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);

          setUserLocation({ latitude, longitude });
        },
        (error) => {
          // display an error if we cant get the users position
          console.error("Error getting user location:", error);
        }
      );
    } else {
      // display an error if not supported
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  useEffect(() => {
    if (!data || !userLocation || !city || !weather) {
      setLoading(true);
      return;
    }
    setLoading(false);
  }, [data, userLocation, city, weather]);
  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/airquality?city=${city}`, {
        headers: {
          "X-Api-Key": api,
        },
      })
      .then((response) => {
        // Handle the successful response
        console.log(response.data.overall_aqi);
        setData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, [city]);
  useEffect(() => {
    axios
      .get(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
        headers: {
          "X-Api-Key": api,
        },
      })
      .then((response) => {
        // Handle the successful response
        console.log(response.data);
        setWeather(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, [city]);

  useEffect(() => {
    console.log(userLocation);
    if (userLocation) {
      axios
        .get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${userLocation[0]}&longitude=${userLocation[1]}&localityLanguage=en`
        )
        .then((response) => {
          // Handle the successful response
          console.log(response.data.locality);
          setCity(response.data.locality);
          // setData(response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error fetching data:", error);
        });
    }
  }, [userLocation]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex-div-11">
        <div className="div-5">
          <div className="aqi-container">
            <div
              className={`round-container ${getAqiContainerClassName(
                data.overall_aqi
              )}`}
            >
              <h2>AQI Value</h2>
              <span className="aqi-value">{data.overall_aqi}</span>
              {data.overall_aqi <= 50 ? <span>Good</span> : ""}
              {data.overall_aqi <= 100 && data.overall_aqi > 50 ? (
                <span className={getAqiClassName(data.overall_aqi)}>
                  Satisfactory
                </span>
              ) : (
                ""
              )}
              {data.overall_aqi <= 200 && data.overall_aqi > 100 ? (
                <span className={getAqiClassName(data.overall_aqi)}>
                  Moderate
                </span>
              ) : (
                ""
              )}
              {data.overall_aqi <= 300 && data.overall_aqi > 200 ? (
                <span className={getAqiClassName(data.overall_aqi)}> Poor</span>
              ) : (
                ""
              )}
              {data.overall_aqi <= 400 && data.overall_aqi > 300 ? (
                <span className={getAqiClassName(data.overall_aqi)}>
                  {" "}
                  Very Poor
                </span>
              ) : (
                ""
              )}
              {data.overall_aqi <= 500 && data.overall_aqi > 400 ? (
                <span className={getAqiClassName(data.overall_aqi)}>
                  {" "}
                  Severe
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="loc-container">
              <div className="flex-div-3">
                <h1 className="cityname">{city}</h1>
                <img src="/city.png" alt="city" className="city-icon" />
              </div>
              <h1>{date.toDateString()}</h1>
              <div className="flex-div-2">
                <div className="flex-div">
                  <img src="/summer_14407609.png" alt="temp" className="icon" />
                  <h1>{weather.temp}</h1>
                </div>
                <div className="flex-div">
                  <img src="/wind_959711.png" alt="temp" className="icon" />
                  <h1>{weather.wind_speed}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-div-12">
            {Object.entries(data).map(([key, value]) => {
              if (key === "overall_aqi") {
                return "";
              } else {
                return (
                  <PollutionComponent
                    key={key}
                    pollutant={key}
                    concentration={value.concentration}
                    aqi={value.aqi}
                  />
                );
              }
            })}
          </div>

          <img src="/aqirange.jpeg" alt="range" className="range" />
        </div>
      </div>
    </Suspense>
  );
}

const PollutionComponent = ({ pollutant, concentration, aqi }) => {
  return (
    <div className="pol-com">
      {/* <img src={`/${pollutant}.png`} alt={pollutant} /> */}
      <p>{pollutant}</p>
      <p>{concentration}</p>
      {/* <p>{aqi}</p> */}
    </div>
  );
};
