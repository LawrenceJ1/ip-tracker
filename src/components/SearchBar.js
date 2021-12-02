import styles from "./SearchBar.module.css";
import arrow from "./icon-arrow.svg";
import { Fragment, useState } from "react";

const SearchBar = (props) => {
  const [value, setValue] = useState();
  const [flash, setFlash] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_0bz1iBFvGehvi35Yu5OTkdArLa4C8&ipAddress=${value}`
    )
      .then((promise) => promise.json())
      .then((promise) => {
        try {
          let x = promise.location.lat;
        } catch {
          setFlash(true);
          setTimeout(() => setFadeOut(true), 1000);
          setTimeout(() => setFlash(false), 3000);
          setFadeOut(false);
          return;
        }
        props.setLat(promise.location.lat);
        props.setLng(promise.location.lng);
        props.setCity(promise.location.city);
        props.setRegion(promise.location.region);
        props.setPostalCode(promise.location.postalCode);
        props.setTimezone(promise.location.timezone);
        props.setIsp(promise.isp);
        props.setIpAddress(promise.ip);
      });
  };
  return (
    <Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          placeholder="Search for any IP address or domain"
          name="ipAddress"
          onChange={inputChangeHandler}
        />
        <img src={arrow} alt="A search arrow" onClick={submitHandler} />
      </form>
      {flash && (
        <div className={`${styles.flashMessage} ${fadeOut && styles.hidden}`}>
          Inavlid Input
        </div>
      )}
    </Fragment>
  );
};

export default SearchBar;
