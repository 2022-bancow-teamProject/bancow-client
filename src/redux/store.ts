import { configureStore, AnyAction, Reducer } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer, { IState } from './modules';

const createStore = () => {
	const store = configureStore({
		reducer: rootReducer as Reducer<IState, AnyAction>
	});
	return store;
};

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper(createStore);
