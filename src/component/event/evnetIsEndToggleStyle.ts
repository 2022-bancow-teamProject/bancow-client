import styled from 'styled-components';

export const Section = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud1};
	padding: 60px 0;
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 40px 0;
	}
`;

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;

export const TabBox = styled.div`
	width: 410px;
	height: 60px;
	display: flex;
	border-radius: 15px;
	position: relative;
	background-color: ${(props) => props.theme.colors.subGray};
	@media ${(props) => props.theme.breakpoints.md} {
		width: 300px;
		height: 55px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 240px;
		height: 50px;
		margin: 10px auto;
	}
`;

export const Back = styled.div`
	height: 100%;
	width: 50%;
	position: absolute;
	background-color: ${(props) => props.theme.colors.subPoint};
	opacity: 0.4;
	transition: ease all 0.4s;
	border-radius: 15px;
	&.active {
		transform: translateX(100%);
	}
`;

export const Tab = styled.div`
	height: 100%;
	width: 50%;
	text-align: center;
	font-size: 23px;
	line-height: 2.56;
	cursor: pointer;
	user-select: none;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 20px;
		line-height: 2.6;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
		line-height: 2.66;
	}
`;
