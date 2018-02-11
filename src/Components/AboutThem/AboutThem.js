import React, { Component } from 'react';
import styles from './AboutThem.css';
import jac from '../../assets/imgs/jac.jpg'
import kemel from '../../assets/imgs/kemel.jpg'
import Avatar from '../Avatar/Avatar';
import Divider from '../Divider/Divider'
class AboutThem extends Component {
	render() {
		return (
			<div>
			<Divider />
				<div className={styles.container}>
					<div className={styles.jac}>
						<Avatar img={jac} status="important"/>
						<div>
							<p className={styles.description}>Macaroon gummies sesame snaps jelly beans brownie sugar plum. Sugar plum chocolate muffin danish sesame snaps pie. Tiramisu cookie toffee pastry caramels jujubes. Brownie jelly-o dragée topping candy powder liquorice tiramisu cookie.</p>
						</div>
					</div>
					<div className={styles.kemel}>
						<Avatar img={kemel} status="important" />
						<div>
							<p className={styles.description}>Lucas ipsum dolor sit amet moff sidious hutt darth organa luuke mandalore boba lando ventress. Moff mothma skywalker calamari. Grievous obi-wan skywalker skywalker jabba dantooine twi'lek lando. Darth darth kamino jar secura fett dantooine dooku alderaan. Ventress zabrak skywalker c-3p0.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default AboutThem;