import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {
	render() {
		return (
			<div className={styles.button}>
				<a>{this.props.text}</a>
			</div>
		);
	}
}

export default Button;