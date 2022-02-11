import AppLinkBox from '../../common/global/AppLinkBox';
import { HeadLine2, HeadLine6 } from '../../common/typography';
import { BackgroundImg } from '../../common/layouts';
import styled from 'styled-components';

const IntroService = () => {
	return (
		<Section>
			<Container>
				<TextBox>
					<SubText>내 소가 캐시가 된다</SubText>
					<MainText>한우자산플랫폼 뱅카우</MainText>
					<AppLinkBox />
				</TextBox>
				<Img1 url="mainpage/mainpageiphone1.png" />
				<Img2 url="mainpage/mainpageiphone2.png" />
				<Img3 url="mainpage/mainpageiphone3.png" />
			</Container>
		</Section>
	);
};

const Section = styled.div`
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

const Container = styled.div`
	width: 82%;
	height: 100%;
	margin: 0 auto;
	position: relative;
`;

const TextBox = styled.div`
	position: absolute;
	left: 6%;
	top: 20%;
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 12%;
	}
`;

const MainText = styled(HeadLine2)`
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

const SubText = styled(HeadLine6)`
	padding-left: 2px;
	color: ${(props) => props.theme.colors.white};
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

const ImgDefault = styled(BackgroundImg)`
	position: absolute;
	border-radius: 38.23px;
	box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
	-webkit-box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 6px 66px 91px 17px rgba(0, 0, 0, 0.25);
`;

const Img1 = styled(ImgDefault)`
	width: 291px;
	height: 616px;
	top: 380px;
	left: 50%;
	@media screen and (max-width: 1400px) {
		display: none;
	}
`;
const Img2 = styled(ImgDefault)`
	width: 291px;
	height: 616px;
	top: 180px;
	left: 76%;
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;

const Img3 = styled(BackgroundImg)`
	display: none;
	@media ${(props) => props.theme.breakpoints.md} {
		display: block;
		position: absolute;
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

export default IntroService;
