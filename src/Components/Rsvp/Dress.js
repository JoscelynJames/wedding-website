import React from 'react';
import styles from './Rsvp.css';
import shirt from '../../assets/imgs/shirt.svg';

const Dress = (props) => {
	return (
		<div className={styles.container}>
			<div>
				<img className={styles.shirt} src={shirt} alt="" />
			</div>
			<div className={styles.dress}>
				<h3>however</h3>
			</div>
		</div>
	)
}

export default Dress;