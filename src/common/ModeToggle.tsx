import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/modules';
import { change } from '../redux/modules/thememode';
import { Circle, ToggleTheme } from './ModeToggleStyle';

const ModeToggle = () => {
	const dispatch = useDispatch();
	const isDark = useSelector((state: RootState) => state.thememode.isDark);
	const onClickHandler = () => {
		dispatch(change());
	};
	return (
		<ToggleTheme onClick={onClickHandler}>
			<Circle className={isDark ? 'dark' : ''} />
		</ToggleTheme>
	);
};

export default ModeToggle;
