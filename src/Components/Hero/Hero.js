import React from 'react';
import styles from './Hero.css';

import Button from '../Button/Button';

const Hero = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.title}>
				Jac and Kem
			</div>
			<Button text="RSVP"/>
		</div>
	);
};

export default Hero;