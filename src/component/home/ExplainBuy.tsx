import { BackgroundImg, CenteredRowBox, PureInnerBox } from '../../common/layouts';
import { Emphasis, HeadLine3, HeadLine4 } from '../../common/typography';
import ExplainHeader from './components/ExplainHeader';
import styled from 'styled-components';

const ExplainBuy = () => {
	return (
		<Section>
			<PureInnerBox>
				<ExplainHeader step="1. 구매하기" desc="유전지수와<br />농가지수로 구매 결정" />
				<RowFlex mt={110}>
					<Img1 url="/mainpage/mainpagesection3-1.png" />
					<TextBox>
						<ExplainText>
							<Emphasis>유전지수</Emphasis>로 유전자를
							<br /> <Emphasis>농가지수</Emphasis>로 농가등급을
							<br /> 간단히 확인해요.
						</ExplainText>
					</TextBox>
				</RowFlex>
				<RowFlex mt={38}>
					<TextBox2>
						<WhiteText>
							출금가능금액은
							<br />
							출금등록으로
							<br />
							빠르게.
						</WhiteText>
						<Img2 url="/mainpage/mainpagesection3-2.png" />
					</TextBox2>
					<TextBox3>
						<ExplainText2>
							사진, 건강검진 내역, 체중으로
							<br /> <Emphasis>내 소의 성장</Emphasis>을 실시간
							<br /> 확인해보아요.
						</ExplainText2>
						<Img3 url="/mainpage/mainpagesection3-3.png" />
					</TextBox3>
				</RowFlex>
			</PureInnerBox>
		</Section>
	);
};

const Section = styled.div`
	transition: ease all 0.5s;
	padding: 80px 0;
	overflow: hidden;
	background-color: ${(props) => props.theme.alt.backgroud1};
`;

const RowFlex = styled.div<{ mt?: number }>`
	display: flex;
	gap: 40px;
	margin-top: ${({ mt }) => (mt ? mt + 'px' : 0 + 'px')};
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
		align-items: center;
		gap: 12px;
		margin-top: ${({ mt }) => (mt ? mt / 2 + 'px' : 0 + 'px')};
	}
`;

const WhiteText = styled(HeadLine4)`
	padding-top: 50px;
	padding-left: 45px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.white};
	@media ${(props) => props.theme.breakpoints.md} {
		margin-bottom: 50px;
	}
`;

const ExplainText2 = styled(HeadLine4)`
	position: absolute;
	left: 48px;
	bottom: 45px;
	color: #000;
	font-weight: 700;
	@media screen and (max-width: 1340px) {
		font-size: 30px;
	}
	@media screen and (max-width: 1110px) {
		font-size: 26px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 22px;
	}
`;

const ExplainText = styled(HeadLine3)`
	@media screen and (max-width: 1340px) {
		font-size: 38px;
	}
	@media screen and (max-width: 1220px) {
		font-size: 30px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 24px;
	}
`;

const Img1 = styled(BackgroundImg)`
	width: 450px;
	height: 470px;
	border-radius: 20px;
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: block;
		width: 300px;
		height: 272px;
	}
`;

const TextBox = styled(CenteredRowBox)`
	flex-grow: 1;
	min-width: 370px;
	height: 470px;
	border-radius: 20px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.colors.white};
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 200px;
		margin-top: 10px;
	}
`;

const TextBox2 = styled.div`
	width: 416px;
	height: 471px;
	background-color: #000;
	border-radius: 20px;
	position: relative;
	@media screen and (max-width: 870px) {
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: block;
	}
`;

const Img2 = styled(BackgroundImg)`
	width: 200px;
	height: 167px;
	right: 40px;
	bottom: 60px;
	position: absolute;
`;

const TextBox3 = styled.div`
	flex-grow: 1;
	height: 471px;
	max-width: 800px;
	min-width: 370px;
	border-radius: 20px;
	position: relative;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.theme.colors.white};
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 171px;
		margin-left: 0px;
		margin-top: 20px;
	}
`;

const Img3 = styled(BackgroundImg)`
	width: 384px;
	height: 260px;
	position: absolute;
	top: 0;
	left: 40%;
	@media screen and (max-width: 1340px) {
		width: 250px;
		height: 190px;
	}
	@media screen and (max-width: 1110px) {
		left: 20%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		display: none;
	}
`;

export default ExplainBuy;
