import React from 'react';
import styles from './Avatar.css';

const Avatar = (props) => {
	return (
		<div className={styles.container}>
			<img className={styles[props.status]} src={props.img} alt="Person"/>
		</div>
	)
}

export default Avatar;