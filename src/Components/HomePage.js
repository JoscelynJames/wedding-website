import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Hero from './Hero/Hero';
import AboutThem from './AboutThem/AboutThem';
import Countdown from './Countdown/Countdown';
import Footer from './Footer/Footer';
import Gift from './Gift/Gift';

import styles from './HomePage.css';

import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {

	routeToRsvp() {
		this.props.history.push('/rsvp');
	}

	render () {
		return (
			<div>
				<div className={styles.header}>
					<h1 className={styles.names} >Jacque and Kemel Wedding</h1>
					<div className={styles.button} onClick={() => this.routeToRsvp()}>
						<RaisedButton label="RSVP" />
					</div>
				</div>
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
}

export default withRouter(HomePage);