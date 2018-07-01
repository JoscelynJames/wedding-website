import React, { Component } from 'react';
import styles from './Countdown.css';

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
		var deadline = new Date("Jan 18, 2019 18:00:00 GMT+01:00").getTime();
		return setInterval(() => {
			var now = new Date().getTime();
			var t = deadline - now;
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			this.setState({
				days,
				hours,
				minutes,
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