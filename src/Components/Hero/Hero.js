import React, { Component } from 'react';
import styles from './Hero.css';
import { withRouter } from 'react-router';

import Button from '../Button/Button';

class Hero extends Component {
	routeToRsvp() {
		this.props.history.push('/rsvp');
	}

	render() {
		return (
			<div className={styles.heroContainer}>
				<div className={styles.title}>
					Jac and Kem
				</div>
				<div onClick={() => this.routeToRsvp()}>
					<Button text="RSVP"/>
				</div>
			</div>
		);
	}
};

export default withRouter(Hero);