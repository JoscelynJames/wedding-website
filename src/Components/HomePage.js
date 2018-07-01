import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Hero from './Hero/Hero';
import Countdown from './Countdown/Countdown';
import Footer from './Footer/Footer';
import Gift from './Gift/Gift';

import jandk from '../assets/imgs/jandk-croped.png';

import styles from './HomePage.css';

import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {

	routeToRsvp() {
		this.props.history.push('/rsvp');
	}

	render () {
		return (
			<div>
				<div className={styles.headerContainer}>
					<div className={styles.header}>
						<div>
							<img className={styles.headerImage} src={jandk} />
						</div>
						<div className={styles.button} onClick={() => this.routeToRsvp()}>
							<RaisedButton label="RSVP" />
						</div>
					</div>
				</div>
				<Hero />
				<div className={styles.container}>
					<Countdown />
					<Gift />
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(HomePage);