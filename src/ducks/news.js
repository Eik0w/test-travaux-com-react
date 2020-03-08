import { createSlice, createSelector } from '@reduxjs/toolkit';

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


/* Selectors */
const getSlice = state => state.news;
export const getNewNews = createSelector([getSlice], data => data.new);

/* Export Reducers */
export const {setNews} = actions;

export default reducer;