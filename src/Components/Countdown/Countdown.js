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

	componentDidMount() {
		var deadline = new Date("Jan 5, 2019 15:37:25").getTime();
		setInterval(() => {
			var now = new Date().getTime();
			var t = deadline - now;
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
			// var seconds = Math.floor((t % (1000 * 60)) / 1000);
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