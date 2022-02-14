import { BackgroundImg, CenteredRowBox, Col, PureInnerBox } from '../../common/layouts';
import { EmphasisSub } from '../../common/typography';
import ExplainHeader from './components/ExplainHeader';
import styled from 'styled-components';

const ExplainSell = () => {
	return (
		<Section>
			<PureInnerBox>
				<ExplainHeader
					step="4. 경매완료"
					desc="나만의 소가<br />캐시카우로 바뀌어요"
					sub="판정 후 등급별 경매가 이루어져요"
				/>
				<Row>
					<Col>
						<Img1 url="/mainpage/mainpagesection6-1.png" />
						<Img2 url="/mainpage/mainpagesection6-2.png" />
					</Col>
					<TextBox>
						<Text>
							<EmphasisSub>도축 판정 결과</EmphasisSub>서
							<br />
							나온 등급으로 경매가 이루어져요
							<br />
							상세페이지에서 확인가능
						</Text>
						<Img3 url="/mainpage/mainpagesection6-3.png" />
						<Text2>
							경매가 끝나면 <EmphasisSub>나의 투자결과</EmphasisSub>를
							<br />
							확인 할 수 있어요
						</Text2>
					</TextBox>
				</Row>
			</PureInnerBox>
		</Section>
	);
};

const Section = styled.div`
	position: relative;
	overflow: hidden;
	transition: ease all 0.5s;
	background-color: ${(props) => props.theme.alt.backgroud1};
	padding-top: 110px;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding-top: 60px;
		height: 1250px;
	}
`;

const Row = styled(CenteredRowBox)`
	margin: 60px auto;
	align-items: flex-start;
`;

const Img1 = styled(BackgroundImg)`
	width: 553px;
	height: 696px;
	border-radius: 20px;
	@media screen and (max-width: 1350px) {
		width: 492px;
		height: 620px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;

const Img2 = styled(BackgroundImg)`
	width: 553px;
	height: 706px;
	border-radius: 20px;
	margin-top: 64px;
	@media screen and (max-width: 1350px) {
		margin-top: 40px;
		width: 485px;
		height: 620px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;

const TextBox = styled(Col)`
	width: 552px;
	height: 1465px;
	margin-left: 60px;
	border-radius: 20px;
	background-color: #000;
	@media screen and (max-width: 1350px) {
		height: 1282px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		margin-left: 0;
		width: 100%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 600px;
		height: 1000px;
		position: absolute;
	}
`;

const Text = styled.div`
	font-size: 33px;
	color: ${(props) => props.theme.colors.white};
	margin: 80px auto 0;
	text-align: right;
	@media screen and (max-width: 1350px) {
		font-size: 24px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 20px;
		margin-top: 40px;
	}
`;

const Img3 = styled(BackgroundImg)`
	width: 411px;
	height: 835px;
	margin: 120px auto;
	@media screen and (max-width: 1350px) {
		width: 344px;
		height: 700px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 344px;
		height: 700px;
		margin: 40px auto;
	}
`;

const Text2 = styled.div`
	font-size: 33px;
	margin: 0 auto;
	color: ${(props) => props.theme.colors.white};
	@media screen and (max-width: 1350px) {
		font-size: 24px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 20px;
	}
`;

export default ExplainSell;
