import styled from 'styled-components';
import { HeadLine2, HeadLine5, HeadLine6 } from '../../common/typography';
import { FlexVerticalCenterBox, Row, HorizontalCenterBox } from './components/common';

export const Section = styled.div`
	padding: 120px 0;
	background-color: ${(props) => props.theme.alt.backgroud1};
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;

export const ContentBox = styled(Row)`
	flex-direction: column;
	gap: 120px;
	@media ${(props) => props.theme.breakpoints.md} {
		gap: 60px;
	}
`;

export const ImgMoney = styled.div`
	width: 214px;
	height: 190px;
	background-image: url('/mainpage/mainpagecoin.png');
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: 60px;
`;

export const Card = styled(FlexVerticalCenterBox)`
	height: 698px;
	margin: 120px 0 0;
	border-radius: 30px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.colors.white};
	//
	opacity: 0;
	transition: all 0.9s ease-in-out;
	&.go {
		opacity: 1;
	}
`;

export const Img = styled.div<{ url: string }>`
	width: 330px;
	height: 400px;
	background-image: url(${({ url }) => url});
	background-repeat: no-repeat;
	background-size: cover;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 247.5px;
		height: 300px;
	}
`;

export const ItemCard = styled(HorizontalCenterBox)`
	justify-content: space-between;
	height: 400px;
	border-radius: 40px;
	background-color: ${(props) => props.theme.alt.backgroud3};
	padding: 0 100px;
	//
	opacity: 0;
	transition: all 0.9s ease-in-out;
	&.go {
		opacity: 1;
	}
	@media screen and (max-width: 1640px) {
		padding: 0 50px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		height: 300px;
	}
	@media screen and (max-width: 930px) {
		flex-direction: column;
		height: 600px;
		padding: 50px 0;
	}
`;

export const TitleText = styled(HeadLine2)`
	margin-bottom: 30px;
	@media screen and (max-width: 1640px) {
		font-size: 40px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 28px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 30px;
	}
`;

export const SubText = styled.h4`
	font-size: 33px;
	color: ${(props) => props.theme.alt.text1};
	@media screen and (max-width: 1640px) {
		font-size: 26px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
	}
`;

export const SubTitle = styled(HeadLine5)`
	text-align: center;
	margin-top: 15px;
	color: ${(props) => props.theme.alt.text3};
`;

export const MainTitle = styled(HeadLine2)`
	margin-bottom: 30px;
	text-align: center;
	color: ${(props) => props.theme.alt.text3};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 46px;
	}
`;

export const SubTitle2 = styled(HeadLine6)`
	font-size: 19px;
	text-align: center;
	margin-top: 32px;
	color: ${(props) => props.theme.alt.text3};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 18px;
	}
`;
