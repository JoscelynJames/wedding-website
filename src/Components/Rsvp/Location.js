import React from 'react';
import styles from './Rsvp.css';
import pin from '../../assets/imgs/map-marker.svg';

const Location = (props) => {
	return (
		<div className={styles.container}>
			<div>
				<img className={styles.pin} src={pin} alt="" />
			</div>
			<div className={styles.location}>
				<h3>27661 Genesee Ln, Golden, CO 80401</h3>
			</div>
		</div>
	)
}

export default Location;