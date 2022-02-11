import styled from 'styled-components';
import { HeadLine2, HeadLine6 } from '../../common/typography';
import { BackgroundImage } from './components/common';

export const Section = styled.div`
	height: 1100px;
	transition: ease all 0.5s;
	background-color: ${(props) => props.theme.colors.point};
	@media screen and (max-width: 1400px) {
		height: 1000px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		height: 900px;
		background-color: ${(props) => props.theme.colors.subPoint};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 800px;
	}
`;

export const Container = styled.div`
	width: 82%;
	height: 100%;
	margin: 0 auto;
	position: relative;
`;

export const TextBox = styled.div`
	position: absolute;
	left: 6%;
	top: 20%;
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 12%;
	}
`;

export const MainText = styled(HeadLine2)`
	margin-top: 16px;
	margin-bottom: 80px;
	color: ${(props) => props.theme.colors.white};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 40px;
		margin-top: 12px;
		margin-bottom: 36px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 300px;
	}
`;

export const SubText = styled(HeadLine6)`
	padding-left: 2px;
	color: ${(props) => props.theme.colors.white};
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

const ImgDefault = styled(BackgroundImage)`
	border-radius: 38.23px;
	box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
	-webkit-box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
`;

export const Img1 = styled(ImgDefault)`
	width: 291px;
	height: 616px;
	background-image: url('mainpage/mainpageiphone1.png');
	top: 380px;
	left: 50%;
	@media screen and (max-width: 1400px) {
		display: none;
	}
`;
export const Img2 = styled(ImgDefault)`
	width: 291px;
	height: 616px;
	background-image: url('mainpage/mainpageiphone2.png');
	top: 180px;
	left: 76%;
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;

export const Img3 = styled.div`
	display: none;
	@media ${(props) => props.theme.breakpoints.md} {
		display: block;
		background-size: cover;
		position: absolute;
		background-image: url('mainpage/mainpageiphone3.png');
		width: 417px;
		height: 626px;
		top: 220px;
		left: 50%;
	}
	@media screen and (max-width: 800px) {
		top: 240px;
		left: 36%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 266.45px;
		height: 400px;
		left: 8%;
		top: 42%;
	}
`;
