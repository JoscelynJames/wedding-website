import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Form.css';
import api from '../../api/apiCalls';
import Confetti from 'react-confetti';

// my components
// import Song from './Song';
import Delete from './Delete';
import Loading from './Loading';

// material ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			plusOne: false,
			showSong1: true,
			showSong2: false,
			showSong3: false,
			text: 'Count Me In!',
			openDialog: false,
			openDialogSuccess: false,
			openDialogFailure: false,
			email: null,
			phone: null,
			guest1: null,
			song1: { title: null, artist: null},
			song2: { title: null, artist: null },
			song3: { title: null, artist: null },
			cantAttend: false,
		};

	}

	handlePlusOne() {
		this.setState({ plusOne: !this.state.plusOne });

		if (!this.state.plusOne) {

			this.setState({ text: 'Count Us In!' });

		} else {

			this.setState({ text: 'Count Me In!' });

		}

	}

	handleAddSongClick() {

		if (this.state.showSong2) {

			this.setState({ showSong3: true});

		} else if (!this.state.showSong2) {

			this.setState({ showSong2: true });

		}

	}

	handleChange(event) {
		console.log(event.target.checked)
		this.setState({ cantAttend: event.target.checked });
	};

	removeSong(e, song) {
		
		this.setState({ [song]: false });

		var songNumber = song.substr(4).toLowerCase();

		this.setState({ [songNumber]: { title: null, artist: null } });

	}

	updateEmail(e) {
		this.setState({ email : e.target.value });
	}

	updatePhone(e) {
		this.setState({ phone: e.target.value });
	}

	updateGuest1(e) {
		this.setState({ guest1: e.target.value});
	}

	updateGuest2(e) {
		this.setState({ guest2: e.target.value});
	}

	updateSong1(e, type) {

		if (type === 'title') this.setState({song1: { title : e.target.value, artist: this.state.song1.artist} });

		if (type === 'artist') this.setState({ song1: { title: this.state.song1.title, artist: e.target.value } });

	}

	updateSong2(e, type) {

		if (type === 'title') this.setState({ song2: { title: e.target.value, artist: this.state.song1.artist } });

		if (type === 'artist') this.setState({ song2: { title: this.state.song2.title, artist: e.target.value } });

	}

	updateSong3(e, type) {

		if (type === 'title') this.setState({ song3: { title: e.target.value, artist: this.state.song1.artist } });

		if (type === 'artist') this.setState({ song3: { title: this.state.song3.title, artist: e.target.value } });

	}

	openDialog() {
		this.setState({ openDialog: true });
	}

	handleClose() {
		if (this.state.openDialogSuccess) {

			this.setState({ openDialogSuccess: false });

			this.props.history.goBack();

		}

		this.setState({ openDialog: false });
		this.setState({ openDialogFailure: false });
	}

	sumbitInfo() {
		this.setState({ loading: true });

		let obj = {
			guest1: this.state.guest1,
			guest2: this.state.guest2,
			phone: this.state.phone,
			email: this.state.email,
		};

		var songs = [
			this.state.song1, 
			this.state.song2, 
			this.state.song3
		];

		api.addGuest(obj)
			.then(res => {

				api.addSongs(songs)
					.then(res2 => {

						this.setState({ 
							openDialog: false,
							openDialogSuccess: true
						});

					})
					.catch(err => {

						this.setState({ openDialogFailure: true, loading: false });

					});

			})
			.catch(err => {
				
				this.setState({ openDialogFailure: true, loading: false });

			});

	}

	render() {

		const actions = [
			<RaisedButton
				label="Somethings Off"
				keyboardFocused={true}
				onClick={() => this.handleClose()}
			/>,
			<RaisedButton
				label="RSVP"
				keyboardFocused={true}
				onClick={() => this.sumbitInfo()}
			/>,
		];

		const actionSuccessOrFailure = [
			<RaisedButton
				label="Close"
				keyboardFocused={true}
				onClick={() => this.handleClose()}
			/>
		];

		const formFields = {
			email: this.state.email,
			phone: this.state.phone,
			guest1: this.state.guest1,
			guest2: this.state.guest2,
			song1: this.state.song1,
			song2: this.state.song2,
			song3: this.state.song3,
		}

		return (
			
			<form className={styles.container}>

				{this.state.openDialogSuccess
					? (
						<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
							<Confetti height={2000} width={2000} numberOfPieces={1000}></Confetti>
						</div>)
					: null
				}

				<Dialog
					overlayStyle={{ opacity: .1 }}
					title="Please Verify Information"
					actions={actions}
					modal={false}
					autoScrollBodyContent={true}
					open={this.state.openDialog}>

					{this.state.loading
						? <Loading></Loading>
						: <VerifyFrom formFields={formFields}></VerifyFrom>}

				</Dialog>


				<Dialog overlayStyle={{ opacity: .1 }} actions={actionSuccessOrFailure} open={this.state.openDialogSuccess}>
					You successfully RSVP to Jacque's and Kemel's wedding! <br />
					You can expect an email confirming from jacqueandkemelwedding@gmailcom<br />
					(We will also send you a reminder email a month before the date)<br />

					See you there!
					</Dialog>

				<Dialog actions={actionSuccessOrFailure} open={this.state.openDialogFailure}>
					Oh no! Something went wrong. <br />
					Please verify required fields are filled out <br />
					If this keeps happening please reach out to us!<br />
				</Dialog>

				<div>

					<div className={styles.guests}>

						<div className={styles.attending}>
							<Checkbox
								checked={this.state.cantAttend}
								onClick={(e) => this.handleChange(e)}
								value="cantAttend"
							/>
							<p >Check me if you cant attend but want to send best wishes to Jacque and Kemel</p>
						</div>

						<h3>Guest(s) Attending</h3>
						<div className={styles.double}>
							<div>
								<div>
									<TextField id="email" hintText="email@email.com" floatingLabelText="Email" onChange={(e) => this.updateEmail(e)}/>
								</div>
							</div>
							<div>
								<div>
									<TextField id="phone" hintText="303-555-5555" floatingLabelText="Phone Number" onChange={(e) => this.updatePhone(e)}/>
								</div>
							</div>
						</div>
							<div className={this.state.plusOne ? styles.double : '' }>
								<div>
									<div>
										<TextField id="guest1" hintText="Full Name" floatingLabelText="First Guest" onChange={(e) => this.updateGuest1(e)} />
									</div>
								</div>
								{this.state.plusOne
									? (
										<div className={styles.row}>
											<div>
												<TextField id="guest2" hintText="Full Name" floatingLabelText="Second Guest" onChange={(e) => this.updateGuest2(e)} />
											</div>
											<div onClick={() => this.handlePlusOne()} className={styles.pointer}>
												<Delete />
											</div>
										</div>
									)
									: (
										<div className={styles.add} onClick={() => this.handlePlusOne()}>
											<RaisedButton label="Add A Plus One" />
										</div>
									)
								}
							</div>
					</div>
					{!this.state.cantAttend ? (
							<div className={`${ styles.songs }`}>
								<h3>Song Request</h3>
								<div className={styles.row}>
									<div className={styles.double}>
										<div className={styles.song}>
											<TextField floatingLabelText="Song Title" onChange={(e) => this.updateSong1(e, 'title')} />
										</div>
										<div className={styles.song}>
											<TextField floatingLabelText="Artist" onChange={(e) => this.updateSong1(e, 'artist')} />
										</div>
									</div>
									<div className="song1" onClick={(e) => this.removeSong(e, 'showSong1')}>
									</div>
								</div>
								{this.state.showSong2 ? (
									<div className={styles.row}>
										<div className={styles.double}>
											<div className={styles.song}>
												<TextField floatingLabelText="Song Title" onChange={(e) => this.updateSong2(e, 'title')} />
											</div>
											<div className={styles.song}>
												<TextField floatingLabelText="Artist" onChange={(e) => this.updateSong2(e, 'artist')} />
											</div>
										</div>
										<div className="song2" onClick={(e) => this.removeSong(e, 'showSong2')}>
											<Delete />
										</div>
									</div>
								)
									: null}
								{this.state.showSong3 ? (
									<div className={styles.row}>
										<div className={styles.double}>
											<div className={styles.song}>
												<TextField floatingLabelText="Song Title" onChange={(e) => this.updateSong3(e, 'title')} />
											</div>
											<div className={styles.song}>
												<TextField floatingLabelText="Artist" onChange={(e) => this.updateSong3(e, 'artist')} />
											</div>
										</div>
										<div className="song3" onClick={(e) => this.removeSong(e, 'showSong3')}>
											<Delete />
										</div>
									</div>
								)
									: null}

								{this.state.showSong3 && this.state.showSong2 && this.state.showSong1
									? null
									: (
										<div className={styles.add} onClick={() => this.handleAddSongClick()}>
											<RaisedButton label="Add Another Song" />
										</div>
									)
								}
							</div>
						) : (
							null
						)
					}
					<div onClick={() => this.openDialog()} className={styles.submit}>
						<RaisedButton label={this.state.text} />
					</div>
				</div>

			</form>
		);

	}
}

const VerifyFrom = ({ formFields }) => {

	return (
		<div className={styles.dialog}>
			<h2>{formFields.email}</h2>
			<h2>{formFields.phone}</h2>
			<h2>{formFields.guest1}</h2>
			<h2>{formFields.guest2}</h2>
			<h2>{formFields.song1.title}</h2>
			<h2>{formFields.song1.artist}</h2>
			{formFields.song2 ? (
				<div>
					<h2>{formFields.song2.title}</h2>
					<h2>{formFields.song2.artist}</h2>
				</div>
			) 
			: null }
			{formFields.song3 ? (
				<div>
					<h2>{formFields.song3.title}</h2>
					<h2>{formFields.song3.artist}</h2>
				</div>
			) 
			: null }
		</div>
	);

};

export default withRouter(Form);