import React, { Component } from 'react';
import Button from '../Button/Button';
import styles from './Form.css';
import update from 'react-addons-update';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			plusOne: false,
			songs: [0],
			text: 'Count Me In!'
		}
	}

	handlePlusOne() {
		this.setState({ plusOne: !this.state.plusOne });
		if (!this.state.plusOne) {
			this.setState({ text: 'Count Us In!' })
		} else {
			this.setState({ text: 'Count Me In!' })
		}
	}

	handleAddSongClick() {
		this.setState({ songs: [...this.state.songs, this.state.songs.length] });
	}

	removeSong() {
		this.setState(prevState => ({
			songs: update(prevState.songs, { $splice: [[prevState.songs.length - 2, (prevState.songs.length -1)]] })
		}))
	}

	render() {
		return (
			<div className={`${styles.container} ${styles.main}`}>
				<div className={`${styles.container} ${styles.guests}`}>
				<h3>Guest Attending</h3>
				<div className={styles.row}>
					<div className={styles.name}>
						<div>
							<label>
								Your Name
							</label>
						</div>
							<input type="text" placeholder="Full Name" required />
					</div>
						<div
							className={styles.blank}
						></div>
				</div>
					{this.state.plusOne 
						? (
							<div className={styles.row}>
								<div className={styles.name}>
									<div>
										<label>
											Their Name
										</label>
									</div>
									<input type="text" placeholder="Full Name" required />
								</div>
								<div 
									className={styles.x}
									onClick={() => this.handlePlusOne()}
								>
										X
								</div>
							</div>
						)
						: (
							<div className={styles.add} onClick={() => this.handlePlusOne()}>
								<Button text="Add A Plus One" />
							</div>
						)
					}
				</div>
				<div className={`${styles.container} ${styles.songs}`}>
						<h3>Song Request</h3>
					{this.state.songs.map(() => {
						return (
							<div key={Math.random()}className={styles.row}>
								<div className={styles.container}>
									<div className={styles.song}>
										<div>
											<label>
												Song Title
											</label>			
										</div>
									<input type="textbox" placeholder="title"/> 
									</div>
									<div className={styles.song}>
										<div>
											<label>
												Artist Name
											</label>
										</div>						
									<input type="textbox" placeholder="artist name"/>
									</div>
								</div>
								<div 
									className={styles.x}
									onClick={() => this.removeSong()}
								>
									X
								</div>
							</div>
						)
					})}
					{this.state.songs.length > 2
						? null
						: (
							<div className={styles.add} onClick={() => this.handleAddSongClick()}>
								<Button text="Add Another Song" />
							</div>
						)
					}
				</div>
				<Button text={this.state.text} />
			</div>
		);
	}
}

export default Form;