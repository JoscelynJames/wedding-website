import React, { Component } from 'react';
import styles from './Footer.css';
import mapMarker from '../../assets/imgs/map-marker.svg';
import facebook from '../../assets/imgs/facebook.svg';
import instagram from '../../assets/imgs/instagram.svg';
import twitter from '../../assets/imgs/twitter.svg';
import spotify from '../../assets/imgs/spotify.svg';
import GoogleMapReact from 'google-map-react';


const Marker = () => {
	return (
		<div>
			<img className={styles.mapMarker} src={mapMarker} alt="" />
		</div>
	);
}

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMap: false,
		}
	};
	location = { lat: 39.7111, lng: -105.3125 };
	zoom = 15;

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
				<div className={styles.map}>
					<GoogleMapReact defaultCenter={ this.location } defaultZoom={ this.zoom } marker={this.location}>
						<Marker lat={this.location.lat} lng={this.location.lng}></Marker>
					</GoogleMapReact>
				</div>
			)
			: null}
				<div className={styles.right}>
					<a href="https://www.google.com/maps/place/Chief+Hosa+Lodge/@39.7113127,-105.3132514,15z/data=!4m7!3m6!1s0x0:0x2a89b84e1a69e9a4!5m1!1s2018-05-13!8m2!3d39.7113127!4d-105.3132514" target="_blank">
						<div>
							<h2>Chief Hosa lodge</h2>
							<div className={styles.location}>
								<img className={styles.mapMarker} src={mapMarker} alt="" />
								27661 Genesee Ln,<br /> Golden,<br /> CO 80401
							</div>
						</div>
					</a>
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
						<a href="">
							<img className={styles.icon} src={spotify} alt="twitter" />
						</a>
					</div>
				</div>
			</div>
		);
	}
};

export default Footer;