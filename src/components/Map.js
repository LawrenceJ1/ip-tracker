import styles from "./Map.module.css";
import icon from "./icon-location.svg";
import L from "leaflet";
import { useEffect } from "react";

const Map = (props) => {
  useEffect(() => {
    let mymap = L.map("map").setView([props.lat + 0.02, props.lng], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibGF3cmVuY2VqdSIsImEiOiJja3ZnYW5sc3Biemx3MnBxNms1c3d6OG5qIn0.w7ECdLqN-lQpRCxQUdKPwA",
      }
    ).addTo(mymap);
    let myIcon = L.icon({
      iconUrl: icon,
      iconSize: [46, 56],
      iconAnchor: [23, 56],
    });
    L.marker([props.lat, props.lng], { icon: myIcon }).addTo(mymap);

    return () => {
      mymap.remove();
    };
  }, [props]);
  return <div id="map" className={styles.mapData}></div>;
};

export default Map;
