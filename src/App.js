import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import styles from "./App.module.css";
import background from "./bg.png";
import MapDetails from "./components/MapDetails";
import { useState } from "react";

const App = () => {
  const fetchData = () => {
    fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_0bz1iBFvGehvi35Yu5OTkdArLa4C8"
    )
      .then((promise) => promise.json())
      .then((promise) => {
        setLat(promise.location.lat);
        setLng(promise.location.lng);
        setCity(promise.location.city);
        setRegion(promise.location.region);
        setPostalCode(promise.location.postalCode);
        setTimezone(promise.location.timezone);
        setIsp(promise.isp);
        setIpAddress(promise.ip);
      });
  };
  const [ipAddress, setIpAddress] = useState(() => {
    fetchData();
  });

  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [region, setRegion] = useState("Unknown");
  const [city, setCity] = useState("Unknown");
  const [postalCode, setPostalCode] = useState("Unknown");
  const [timezone, setTimezone] = useState("Unknown");
  const [isp, setIsp] = useState("Unknown");

  return (
    <div className={styles.container}>
      <img
        src={background}
        className={styles.background}
        alt="The background"
      />
      <Header />
      <SearchBar
        setIpAddress={setIpAddress}
        setLat={setLat}
        setLng={setLng}
        setRegion={setRegion}
        setCity={setCity}
        setPostalCode={setPostalCode}
        setTimezone={setTimezone}
        setIsp={setIsp}
      />
      <MapDetails
        ipAddress={ipAddress}
        city={city}
        region={region}
        postalCode={postalCode}
        timezone={timezone}
        isp={isp}
      />
      <Map lat={lat} lng={lng} />
    </div>
  );
};

export default App;
