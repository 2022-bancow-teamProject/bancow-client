import styled from 'styled-components';

export const Section = styled.div`
	transition: ease all 0.5s;
	background-color: ${(props) => props.theme.alt.backgroud1};
	padding-top: 50px;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding-top: 10px;
	}
`;

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	padding-left: 6%;
	display: flex;
	flex-direction: column;
	@media ${(props) => props.theme.breakpoints.md} {
		justify-content: center;
		align-items: center;
		padding-left: 0;
	}
`;

export const HeadLine3 = styled.h3`
	font-size: 44px;
	color: ${(props) => props.theme.alt.text1};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 36px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		text-align: center;
	}
`;

export const HeadLine3B = styled(HeadLine3)`
	font-weight: 700;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 240px;
	}
`;
