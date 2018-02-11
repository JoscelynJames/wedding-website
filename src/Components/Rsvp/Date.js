import React from 'react';
import styles from './Rsvp.css';
import calendar from '../../assets/imgs/calendar.svg';

const Date = (props) => {
	return (
		<div className={styles.container}>
			<div>
				<img className={styles.calendar} src={calendar} alt="" />
			</div>
			<div className={styles.date}>
				<h3>September 20th, 2018</h3>
				<h3>3 pm</h3>
			</div>
		</div>
	)
}

export default Date;