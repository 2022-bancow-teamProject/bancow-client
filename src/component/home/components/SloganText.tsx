import { Emphasis, HeadLine2 } from '../../../common/typography';
import styled from 'styled-components';

const SloganText = () => {
	return (
		<>
			<MainText>
				누구나
				<br />
				<Emphasis>4만원</Emphasis>부터
				<br />
				<Emphasis>한우</Emphasis>를<br />
				소유할 수 있다고요?
			</MainText>
			<MainTextSmall>누구나 4만원부터 한우를 소유할 수 있다고요?</MainTextSmall>
		</>
	);
};

const MainText = styled(HeadLine2)`
	@media screen and (max-width: 1280px) {
		font-size: 48px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;

const MainTextSmall = styled.h2`
	display: none;
	@media ${(props) => props.theme.breakpoints.md} {
		display: block;
		font-size: 30px;
		font-weight: 400;
		line-height: 1.45;
		color: ${(props) => props.theme.colors.white};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 220px;
	}
`;

export default SloganText;
