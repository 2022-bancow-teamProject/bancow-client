import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/modules';
import { change } from '../../redux/modules/thememode';
import styled from 'styled-components';

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

const ToggleTheme = styled.span`
	display: inline-block;
	width: 68px;
	height: 36px;
	background: ${(props) => props.theme.colors.gray4};
	border-radius: 36px;
	cursor: pointer;
	position: relative;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 52px;
		height: 26px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;

const Circle = styled.span`
	position: absolute;
	width: 28px;
	height: 28px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.dark};
	transform: translate(5px, 4px);
	transition: all 0.2s linear;
	&.dark {
		background: ${(props) => props.theme.colors.white};
		transform: translate(36px, 4px);
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 22px;
		height: 22px;
		transform: translate(3px, 2px);
		&.dark {
			transform: translate(26px, 2px);
		}
	}
`;

export default ModeToggle;
