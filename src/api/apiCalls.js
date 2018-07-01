import axios from 'axios';
const heroku_url = 'https://evening-chamber-18652.herokuapp.com';

export default {
	addGuest: (guestObj) => {
		return axios.post(`${heroku_url}/guests`, guestObj);
	},
	addSongs: (songs) => {
		return axios.post(`${heroku_url}/songs`, songs);
	},
	getGuests: () => {
		return axios.get(`${heroku_url}/guests`);
	},
	getSongs: () => {
		return axios.get(`${heroku_url}/songs`);
	},
};