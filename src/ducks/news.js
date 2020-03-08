import {createSlice, createSelector} from '@reduxjs/toolkit';
import axios from 'axios';
import {apiBaseUrl} from "../config/database";

const slice = createSlice({
	name: 'news',
	initialState: {
		best: [],
		new: [],
		past: [],
		comments: [],
		ask: [],
		show: [],
		jobs: [],
		submit: []
	},
	reducers: {
		setNew: (state, {payload}) => {
			state.new = payload;
		},
		setBest : (state, {payload}) => {
			state.best = payload;
		},
		setPast : (state, {payload}) => {
			state.past = payload;
		},
		setAsk : (state,{payload}) => {
			state.ask = payload;
		},
		setShow : (state,{payload}) => {
			state.show = payload;
		},
		setJobs : (state,{payload}) => {
			state.jobs = payload;
		},
	},
});

const {reducer, actions} = slice;

/* Side effect */
export const getNew = () => dispatch => {
	axios.get(apiBaseUrl + 'newstories.json', {}).then(({data}) => {
		if (data && data.length) {
			const tmpResult = [];
			var newResult = data.slice(0,30)
			newResult.forEach((id, key) => {
				axios.get(apiBaseUrl + 'item/' + id + '.json', {}).then(({data}) => {
					tmpResult.push(data)
					if (key === 29) {
						dispatch(setNew(tmpResult))
					}
				})
			});
		}
	})
};

export const getBestIds = () => dispatch => {
	axios.get(apiBaseUrl + 'beststories.json', {}).then(({data}) => {
		if (data && data.length) {
			const tmpResult = [];
			var newResult = data.slice(0,30)
			newResult.forEach((id, key) => {
				axios.get(apiBaseUrl + 'item/' + id + '.json', {}).then(({data}) => {
					tmpResult.push(data)
					if (key === 29) {
						dispatch(setBest(tmpResult))


					}
				})
			});
		}
	})
};

export const getPast = () => dispatch => {
	axios.get(apiBaseUrl + 'topstories.json', {}).then(({data}) => {
		if (data && data.length) {
			const tmpResult = [];
			var newResult = data.slice(0,30)
			newResult.forEach((id, key) => {
				axios.get(apiBaseUrl + 'item/' + id + '.json', {}).then(({data}) => {
					tmpResult.push(data)
					if (key === 29) {
						dispatch(setPast(tmpResult))
					}
				})
			});
		}
	})
};

export const getAsk = () => dispatch => {
	axios.get(apiBaseUrl + 'askstories.json', {}).then(({data}) => {
		if (data && data.length) {
			const tmpResult = [];
			var newResult = data.slice(0,30)
			newResult.forEach((id, key) => {
				axios.get(apiBaseUrl + 'item/' + id + '.json', {}).then(({data}) => {
					tmpResult.push(data)
					if (key === 29) {
						dispatch(setAsk(tmpResult))
					}
				})
			});
		}
	})
};

export const getShow = () => dispatch => {
	axios.get(apiBaseUrl + 'showstories.json', {}).then(({data}) => {
		if (data && data.length) {
			const tmpResult = [];
			var newResult = data.slice(0,30)
			newResult.forEach((id, key) => {
				axios.get(apiBaseUrl + 'item/' + id + '.json', {}).then(({data}) => {
					tmpResult.push(data)
					if (key === 29) {
						dispatch(setShow(tmpResult))
					}
				})
			});
		}
	})
};

export const getJobs = () => dispatch => {
	axios.get(apiBaseUrl + 'showstories.json', {}).then(({data}) => {
		if (data && data.length) {
			const tmpResult = [];
			var newResult = data.slice(0,30)
			newResult.forEach((id, key) => {
				axios.get(apiBaseUrl + 'item/' + id + '.json', {}).then(({data}) => {
					tmpResult.push(data)
					if (key === 29) {
						dispatch(setJobs(tmpResult))
					}
				})
			});
		}
	})
};









/* Selectors */
const getSlice = state => state.news;
export const getNewNews = createSelector([getSlice], data => data.new);
export const getBestNews = createSelector([getSlice], data => data.best);
export const getPastNews = createSelector([getSlice], data => data.past);
export const getAskNews = createSelector([getSlice], data => data.ask);
export const getShowNews = createSelector([getSlice], data => data.show);
export const getJobsNews = createSelector([getSlice], data => data.jobs);

/* Export Reducers */
export const {setNew, setBest, setPast, setAsk, setShow,setJobs} = actions;

export default reducer;