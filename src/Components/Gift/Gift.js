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
						<h4>When?</h4>
						<h4>January 18th, 2019 at 6pm</h4>
					</div>
					<div className={styles.row}>
						<h4>Where?</h4>
						<h4>Cheif Hosa Lodge in Golden Colorado</h4>
					</div>
					<div className={styles.row}>
						<h4>Dress Code?</h4>
						<h4>At least shower</h4>
					</div>
					<div className={styles.row}>
						<h4>Is there food?</h4>
						<h4>Yes</h4>
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