import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './theme-slice';
import { countrySlice } from './countires-slice';
import { inputSlice } from './input-slice';

export const store = configureStore({
	reducer: {
		theme: themeSlice.reducer,
		countries: countrySlice.reducer,
		input: inputSlice.reducer,
	},
});
