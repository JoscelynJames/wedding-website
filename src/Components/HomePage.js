import React from 'react';
import Hero from './Hero/Hero';
import AboutThem from './AboutThem/AboutThem';
import Countdown from './Countdown/Countdown';
import Footer from './Footer/Footer';
import Gift from './Gift/Gift';
import styles from './HomePage.css';

const HomePage = () => {
	return (
		<div>
			<Hero />
			<AboutThem />
			<div className={styles.container}>
				<Countdown />
				<Gift />
			</div>
			<Footer />
		</div>
	);
}

export default HomePage