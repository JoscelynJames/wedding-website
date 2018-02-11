import React from 'react';
import styles from './Divider.css';

const Divider = () => {
	var height = document.getElementsByClassName('AboutThem')
	console.log(height)
	return (
		<div className={styles.dashed}></div>
	);
};

export default Divider;