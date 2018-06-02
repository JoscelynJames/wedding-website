import React from 'react';
import styles from './Form.css';
import loadingGIF from '../../assets/imgs/loading.gif';

export default function Loading() {
    return <img className={styles.loading} src={loadingGIF} alt="loading"/>;
}