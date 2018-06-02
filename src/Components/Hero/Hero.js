import React, { Component } from 'react';
import styles from './Hero.css';
import { withRouter } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class Hero extends Component {

	render() {
		return <div className={styles.heroContainer}></div>;
	}
};

export default withRouter(Hero);