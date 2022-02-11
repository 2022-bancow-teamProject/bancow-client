import styled from 'styled-components';

export const Section = styled.div`
	transition: ease all 0.5s;
	background-color: ${(props) => props.theme.colors.point};
`;

export const Box = styled.div`
	height: 450px;
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.md} {
		padding-top: 20px;
	}
	@media screen and (max-width: 870px) {
		flex-direction: column;
		height: 550px;
		padding: 34px 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 34px 0 38px;
		height: 580px;
	}
`;

export const InfoBox = styled.div`
	color: ${(props) => props.theme.colors.subGray};
	margin-top: 44px;
	font-size: 19px;
	line-height: 1.5;
	@media screen and (max-width: 870px) {
		font-size: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		width: 220px;
	}
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexBox = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 16px;
`;
