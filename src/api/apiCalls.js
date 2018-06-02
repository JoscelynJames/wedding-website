import axios from 'axios';

export default {
	addGuest: (guestObj) => {
		return axios.post('http://127.0.0.1:3210/guests', guestObj)
			// .then(res => console.log(res))
			// .catch(err => {
			// 	console.warn(err)
			// 	return router.push('/error')
			// })
	},
	addSongs: (songs) => {
		return axios.post('http://127.0.0.1:3210/songs', songs)
			// .then(res => console.log(res))
			// .catch(err => {
			// 	console.warn(err)
			// 	return router.push('/error')
			// })
	},
	getGuests: () => {
		return axios.get('http://127.0.0.1:3210/guests')
	},
	getSongs: () => {
		return axios.get('http://127.0.0.1:3210/songs')
	},
}