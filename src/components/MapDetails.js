import Card from "../UI/Card";
import styles from "./MapDetails.module.css";

const MapDetails = (props) => {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.cardLeft}>
        <div className={styles.description}>Ip Address</div>
        <div className={styles.info}>{props.ipAddress}</div>
        <div className={styles.line}></div>
      </Card>
      <Card>
        <div className={styles.description}>Location</div>
        <div className={styles.info}>
          {props.city}, {props.region} {props.postalCode}
        </div>
        <div className={styles.line}></div>
      </Card>
      <Card>
        <div className={styles.description}>Timezone</div>
        <div className={styles.info}>UTC {props.timezone}</div>
        <div className={styles.line}></div>
      </Card>
      <Card className={styles.cardRight}>
        <div className={styles.description}>ISP</div>
        <div className={styles.info}>{props.isp}</div>
      </Card>
    </div>
  );
};

export default MapDetails;
