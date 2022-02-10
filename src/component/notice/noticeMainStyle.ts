import styled from 'styled-components';
import { HeadLine4, HeadLine5 } from '../../common/typography';

export const Section = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud1};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 100px 0;
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 70px 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 50px 0;
	}
`;

export const UnderLineBox = styled.a`
	padding: 8px 0;
	width: 800px;
	border-bottom: 1px solid ${(props) => props.theme.alt.text1};
	margin-bottom: 38px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 600px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 270px;
	}
`;

export const HeadLine4Style = styled(HeadLine4)`
	font-size: 28px;
	margin-bottom: 8px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 20px;
	}
`;

export const HeadLine5Style = styled(HeadLine5)`
	color: ${(props) => props.theme.alt.text1};
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;
