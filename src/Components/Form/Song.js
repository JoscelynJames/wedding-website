import React from 'react';
import styles from './Form.css';
import TextField from 'material-ui/TextField'

export default function Song(props) {
	return (
		<div>
			<div className={styles.song}>
				<TextField className={props.song} floatingLabelText="Song Title" />
			</div>
			<div className={styles.song}>
				<TextField className={props.song} floatingLabelText="Artist" />
			</div>
		</div>
	)
};