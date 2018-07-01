import React, { Component } from 'react';
import { withRouter } from 'react-router';

import styles from './Gift.css';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Gift extends Component {

	routeToRsvp() {
		this.props.history.push('/rsvp');
	}

	render () {
		return (
			<Paper elevation={4}>
				<div className={styles.container}>
					<h2 className={styles.details}> The Details </h2>
					<div className={styles.row}>
						<h3 className={styles.header}>When?</h3>
						<p className={styles.info}>January 18th, 2019 at 6pm</p>
					</div>
					<div className={styles.row}>
						<h3 className={styles.header}>Where?</h3>
						<p className={styles.info}>Cheif Hosa Lodge in Golden Colorado</p>
					</div>
					<div className={styles.row}>
						<h3 className={styles.header}>Dress Code?</h3>
						<p className={styles.info}>Business Casual</p>
					</div>
					<div className={styles.row}>
						<h3 className={styles.header}>Is there food?</h3>
						<p className={styles.info}>Yes</p>
					</div>
	
					<div className={styles.button} onClick={() => this.routeToRsvp()}>
						<RaisedButton label="RSVP" />
					</div>
				</div>
			</Paper>
		);
	}
}

export default withRouter(Gift);