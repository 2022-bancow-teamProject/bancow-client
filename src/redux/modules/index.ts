import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import thememode, { DarkModeState } from './thememode';

export interface IState {
	thememode: DarkModeState;
}

const rootReducer = (state: IState, action: AnyAction) => {
	switch (action.type) {
		// 서버 사이드 데이터를 클라이언트 사이드 Store에 통합.
		case HYDRATE:
			return { ...action.payload };
		default: {
			return combineReducers({ thememode })(state, action);
		}
	}
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
