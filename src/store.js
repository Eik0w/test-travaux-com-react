import { configureStore } from '@reduxjs/toolkit';
import news from "./ducks/news";

const store = configureStore({
	reducer: {
		 news,
	},
});

export default store;
