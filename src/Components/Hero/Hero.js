import React, { Component } from 'react';
import styles from './Hero.css';
import { withRouter } from 'react-router';

class Hero extends Component {

	render() {
		return <div className={styles.heroContainer}></div>;
	}
};

export default withRouter(Hero);