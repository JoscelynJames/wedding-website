import React, { Component } from 'react';
import moment from 'moment';
import countdown from 'countdown';
import styles from './Countdown.css';
require('moment-countdown');

class Countdown extends Component {	
	constructor(props) {
		super(props);

		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			weddingTime: false
		};

	}

	componentWillUnmount() {
		clearInterval(this.state.setIntervalFunc);
	}

	componentDidMount() {
		var setIntervalFunc = this.countdown();
		this.setState({ setIntervalFunc })
	}

	countdown() {
		var deadline = new Date(Date.UTC(2019, 0, 18, 24, 0, 0));

		return setInterval(() => {
			const countdownTime = moment().countdown(deadline, countdown.DAYS | countdown.HOURS | countdown.MINUTES);
			
			this.setState({
				days: countdownTime.days,
				hours: countdownTime.hours,
				minutes: countdownTime.minutes,
			})
		}, 1000)
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.days}>
					<div className={styles.card}>{this.state.days} <span className={styles.text}>days</span></div>
				</div>
				<div className={styles.time}>
					<div className={styles.hours}>
						<div className={styles.card}>{this.state.hours} <span className={styles.text}>hours</span></div>
					</div>
					<div className={styles.minutes}>
						<div className={styles.card}>{this.state.minutes} <span className={styles.text}>minutes</span></div>
					</div>
				</div>
			</div>
		)
	}
};

export default Countdown;