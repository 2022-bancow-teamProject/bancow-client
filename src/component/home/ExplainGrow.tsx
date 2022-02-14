import { BackgroundImg, CenteredRowBox, PureInnerBox } from '../../common/layouts';
import { EmphasisSub } from '../../common/typography';
import ExplainHeader from './components/ExplainHeader';
import styled from 'styled-components';

const ExplainGrow = () => {
	return (
		<Section>
			<PureInnerBox>
				<ExplainHeader
					step="2. 사육하기"
					desc="4만원부터<br />한우를 소유가능"
					sub="보기도 어려운 차트로 정신 없진 않으신가요?<br />귀여운 송아지에 투자하여 키우는 재미도 느껴요!"
				/>
				<RowItem>
					<ImgBox>
						<Img url="/mainpage/mainpagesection4-1.png" />
					</ImgBox>
					<TextBox>
						<Img2 url="/mainpage/mainpagesection4-2.png" />
						<Text>
							실시간 업로드되는
							<br /> 실물사진,
							<br />
							<br /> 지금 바로 <EmphasisSub>뱅카우</EmphasisSub>에서
							<br /> 확인해보세요
						</Text>
					</TextBox>
				</RowItem>
			</PureInnerBox>
		</Section>
	);
};

const Section = styled.div`
	transition: ease all 0.5s;
	padding: 40px 0 60px;
	background-color: ${(props) => props.theme.alt.backgroud1};
	position: relative;
	overflow: hidden;
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 820px;
	}
`;

const RowItem = styled(CenteredRowBox)`
	height: 516px;
	margin-top: 80px;
`;

const ImgBox = styled.div`
	width: 378px;
	height: 516px;
	border-radius: 20px;
	margin-right: 30px;
	background-color: ${(props) => props.theme.colors.gray1};
	@media screen and (max-width: 1420px) {
		display: none;
	}
`;

const Img = styled(BackgroundImg)`
	width: 325px;
	height: 516px;
	margin: 0 auto;
`;

const Img2 = styled(BackgroundImg)`
	width: 336px;
	height: 516px;
	margin-left: 60px;
	@media screen and (max-width: 980px) {
		margin: 50px auto;
		border-radius: 20px;
		background-size: 116%;
		background-position-y: 18%;
		background-position-x: 24%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 300px;
		background-size: 144%;
		background-position-y: 19%;
		margin-bottom: 40px;
	}
`;

const TextBox = styled.div`
	width: 880px;
	height: 516px;
	border-radius: 20px;
	margin-right: 30px;
	background-color: #000;
	display: flex;
	align-items: flex-end;
	@media screen and (max-width: 980px) {
		flex-direction: column;
		align-items: center;
		height: 540px;
		margin-right: 0px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		position: absolute;
	}
`;

const Text = styled.div`
	font-size: 33px;
	color: ${(props) => props.theme.colors.white};
	margin-left: 46px;
	margin-bottom: 60px;
	@media screen and (max-width: 980px) {
		margin-left: 0px;
		margin-bottom: 40px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 24px;
	}
`;

export default ExplainGrow;
