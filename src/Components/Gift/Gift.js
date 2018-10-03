import React, { Component } from "react";
import { withRouter } from "react-router";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import styles from "./Gift.css";
import CountDown from "../Countdown/Countdown";
// imgs/assets
import pdf from "../../assets/files/transportaion.pdf";
import zola from "../../assets/imgs/zola2.webp";
import amazon from "../../assets/imgs/amazonwedding.png";

class Gift extends Component {
  routeToRsvp() {
    this.props.history.push("/rsvp");
  }

  render() {
    return (
      <div className={styles.container}>
        <GeneralInfo />
        <GiftInfo />
        <HotelInfo />
        <CountDownInfo />
      </div>
    );
  }
}

const HotelInfo = () => {
  return (
    <Paper elevation={4} className={styles.paperHotel}>
      <div className={styles.paperDetails}>
        <h2 className={styles.details}> Comfort Inn Suites </h2>
        <div className={styles.row}>
          <p className={styles.info}>
            29300 U.S. Highway 40 Evergreen, CO 80439
          </p>
          <p className={styles.info}>
            <a href="https://goldenevergreenhotel.com/">
              https://goldenevergreenhotel.com
            </a>
          </p>
          <p className={styles.info}>1.5 miles away from Chief Hosa Lodge</p>
          <p className={styles.info}>
            <a href={pdf} download="TransportationInfo.pdf">
              Group Transportation PDF
            </a>
          </p>
          <p className={styles.info}>$125 - $140 per night</p>
          <p className={styles.info}>
            Includes: complementary hot breakfast, indoor pool indoor and
            outdoor hot tub, fitness center,
          </p>
          <p className={styles.info}>
            <span className={styles.bold}>Please call to book your room</span>{" "}
            under the Blue Wedding to receive discounted rate.
          </p>
        </div>
      </div>
    </Paper>
  );
};

const GiftInfo = () => {
  return (
    <Paper elevation={4} className={styles.paperGift}>
      <div className={styles.paperDetails}>
        <div className={styles.row}>
          <h3 className={styles.details}>Gift Registry:</h3>
          <div className={styles.giftInfo}>
            <a
              href="https://www.zola.com/registry/jacquelineandkemel"
              className={styles.giftReg}
            >
              <img className={styles.giftImg} src={zola} />
            </a>
            <a
              href="https://www.amazon.com/wedding/jacqueline-james-kemel-blue-golden-january-2019/registry/1GFI8FVQHOMKA"
              className={styles.giftReg}
            >
              <img className={styles.giftImg} src={amazon} />
            </a>
          </div>
        </div>
      </div>
    </Paper>
  );
};

const CountDownInfo = () => {
  return (
    <Paper elevation={4} className={styles.paperCountDown}>
      <CountDown />
    </Paper>
  );
};

const GeneralInfo = () => {
  return (
    <Paper elevation={4} className={styles.paperGeneral}>
      <div className={styles.paperDetails}>
        <h2 className={styles.details}> The Details </h2>
        <div className={styles.row}>
          <h3 className={styles.header}>When?</h3>
          <p className={styles.info}>
            January 18th, 2019 <br /> Ceremony starts at 4pm <br /> Reception
            starts at 5pm
          </p>
        </div>
        <div className={styles.row}>
          <h3 className={styles.header}>Where?</h3>
          <p className={styles.info}>Chief Hosa Lodge in Golden, Colorado</p>
        </div>
        <div className={styles.row}>
          <h3 className={styles.header}>Dress Code?</h3>
          <p className={styles.info}>Business Casual</p>
        </div>
        <div className={styles.row}>
          <h3 className={styles.header}>Is there food?</h3>
          <p className={styles.info}>
            Cheese, Charcuterie and biker Jim’s hot dogs
          </p>
        </div>
      </div>
    </Paper>
  );
};

export default withRouter(Gift);
