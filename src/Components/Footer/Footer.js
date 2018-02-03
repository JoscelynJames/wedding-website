import React, { Component } from 'react';
import styles from './Footer.css';
import map from '../../assets/imgs/map.png';
import mapMarker from '../../assets/imgs/map-marker.png';
import facebook from '../../assets/imgs/facebook.svg';
import instagram from '../../assets/imgs/instagram.svg';
import twitter from '../../assets/imgs/twitter.svg';

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMap: false,
		}
	};

	checkWindow() {
		if (window.innerWidth > 750) {
			this.setState({ showMap: true })
		}
		else {
			this.setState({ showMap: false })
		}
	}

	componentDidMount() {
		this.checkWindow()
		window.onresize = () => {
			this.checkWindow()
		}
	}

	render() {
		return (
			<div className={styles.container}>
			{this.state.showMap ? (
				<div>
					<img src={map} alt="ButterFly Pavilion" className={styles.map} />
				</div>
			)
			: null}
				<div className={styles.right}>
					{/* <div className={styles.wheater}>
						Wheater
					</div> */}
					<div>
						<h2>ButterFly Pavilion</h2>
						<div className={styles.location}>
							<img className={styles.mapMarker} src={mapMarker} alt="" />
							6252 W 104th Ave<br/> Westminster, CO<br/> 80020
						</div>
					</div>
					<div className={styles.socialMedia}>
						<a href="">
							<img className={styles.icon} src={facebook} alt="facebook" />
						</a>
						<a href="">
							<img className={styles.icon} src={instagram} alt="instagram" />
						</a>
						<a href="">
							<img className={styles.icon} src={twitter} alt="twitter" />
						</a>
					</div>
				</div>
			</div>
		);
	}
};

export default Footer;