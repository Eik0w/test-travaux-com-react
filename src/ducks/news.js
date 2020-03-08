import { createSlice, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';
import {apiBaseUrl} from "../config/database";

const slice = createSlice({
	name: 'favoritesMovies',
	initialState: {
		new : [],
		past : [],
		comments : [],
		ask : [],
		show : [],
		jobs : [],
		submit : []
	},
	reducers: {
		setNews : (state, {payload}) => {
			console.log('test set news');
		}
	},
});

const { reducer, actions } = slice;

/* Side effect */
export const getNew = () => dispatch => {
	axios.get(apiBaseUrl+'newstories.json', {}).then(({data}) => {
		console.log('hello la reponse ', data);
	})
};

export const beststories = () => dispatch => {
	axios.get(apiBaseUrl+'beststories.json', {}).then(({data}) => {
		console.log('hello la reponse ', data);
	})
};


/* Selectors */
const getSlice = state => state.news;
export const getNewNews = createSelector([getSlice], data => data.new);

/* Export Reducers */
export const {setNews} = actions;

export default reducer;