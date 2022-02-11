import styled from 'styled-components';
import { HeadLine2, HeadLine4 } from '../../common/typography';
import { FlexVerticalCenterBox } from './components/common';

export const Section = styled.div`
	position: relative;
	height: 1100px;
	overflow: hidden;
	transition: ease all 0.5s;
	padding: 80px 0;
	background-color: ${(props) => props.theme.alt.backgroud1};
	@media screen and (max-width: 1550px) {
		height: 960px;
	}
	@media screen and (max-width: 1270px) {
		height: 860px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		height: 1220px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0;
		height: 1680px;
	}
`;

export const MainText = styled(HeadLine2)`
	margin-bottom: 30px;
	text-align: center;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 30px;
	}
`;

export const SubText = styled(HeadLine4)`
	margin-bottom: 20px;
	text-align: center;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-bottom: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 23px;
		margin-bottom: 30px;
	}
`;

export const CardBox = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 440px;
		flex-wrap: wrap;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
		width: 100%;
		align-items: center;
		flex-wrap: nowrap;
	}
`;

export const Card = styled(FlexVerticalCenterBox)`
	width: 340px;
	height: 500px;
	border-radius: 14px;
	margin-top: 80px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.alt.backgroud4};
	@media screen and (max-width: 1800px) {
		width: 300px;
		height: 460px;
	}
	@media screen and (max-width: 1550px) {
		width: 240px;
		height: 400px;
	}
	@media screen and (max-width: 1270px) {
		width: 200px;
		height: 300px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 40px;
	}
`;

export const LinkText = styled.h5`
	font-size: 24px;
	color: ${(props) => props.theme.colors.subPoint};
	display: flex;
	align-items: center;
	svg {
		margin-left: 8px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

export const Title = styled(HeadLine4)`
	text-align: center;
	margin-top: 80px;
	margin-bottom: 70px;
	color: #000;
	@media screen and (max-width: 1270px) {
		font-size: 28px;
		margin-top: 50px;
		margin-bottom: 28px;
	}
`;

export const DescLine = styled.h6`
	font-size: 19px;
	color: ${(props) => props.theme.colors.point};
	text-align: center;
	@media screen and (max-width: 1270px) {
		font-size: 16px;
	}
`;

export const SubLine = styled.p`
	font-size: 16px;
	text-align: center;
	line-height: 1.3;
	margin: 20px;
	@media screen and (max-width: 1270px) {
		font-size: 14px;
	}
`;
