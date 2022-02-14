import { BackgroundImg, PureInnerBox } from '../../common/layouts';
import { EmphasisSub } from '../../common/typography';
import ExplainHeader from './components/ExplainHeader';
import styled from 'styled-components';

const ExplainMarket = () => {
	return (
		<Section>
			<PureInnerBox>
				<ExplainHeader
					step="3. 출하하기"
					desc="30개월 되면<br />출하진행"
					sub="한우는 생후 26개월~34개월이 되면 출하가 이뤄져요.<br />이후 출하,도축,판정이 순서대로 진행돼요."
				/>
				<TextBox>
					<Text>
						출하일이 확정되면
						<br />
						<EmphasisSub>출하, 도축, 판정순</EmphasisSub>으로
						<br /> 진행돼요
					</Text>
					<Img1 url="/mainpage/mainpagesection5-1.png" />
				</TextBox>
				<RowFlex>
					<GrayBox>
						<Img2 url="/mainpage/mainpagesection5-2.png" />
						<Text2>
							출하정보
							<br />
							도축정보를
							<br />
							확인하세요
						</Text2>
					</GrayBox>
					<GrayBox2>
						<Text3>
							마지막 판정등급을
							<br />
							확인하면 완료!
						</Text3>
						<Img3 url="/mainpage/mainpagesection5-3.png" />
					</GrayBox2>
				</RowFlex>
			</PureInnerBox>
		</Section>
	);
};

const Section = styled.div`
	overflow: hidden;
	transition: ease all 0.5s;
	padding: 110px 0 0;
	background-color: ${(props) => props.theme.alt.backgroud1};
	@media ${(props) => props.theme.breakpoints.sm} {
		padding-top: 60px;
	}
`;

const Img1 = styled(BackgroundImg)`
	width: 430px;
	height: 346px;
	margin-right: 50px;
	@media screen and (max-width: 1100px) {
		width: 320px;
		height: 220px;
		margin-top: 60px;
	}
	@media screen and (max-width: 980px) {
		margin: 0;
		border-radius: 20px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 270px;
	}
`;

const TextBox = styled.div`
	height: 346px;
	border-radius: 20px;
	background-color: #000;
	margin-top: 60px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	@media screen and (max-width: 980px) {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 400px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		position: relative;
	}
`;

const GrayBox = styled.div`
	width: 47%;
	height: 308px;
	border-radius: 20px;
	margin-right: 2%;
	background-color: ${(props) => props.theme.colors.gray2};
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	@media screen and (max-width: 1550px) {
		width: 78%;
		margin-right: 0;
	}
	@media screen and (max-width: 980px) {
		display: none;
	}
`;
const GrayBox2 = styled.div`
	width: 51%;
	height: 308px;
	border-radius: 20px;
	background-color: ${(props) => props.theme.colors.gray2};
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	@media screen and (max-width: 1550px) {
		width: 78%;
	}
	@media screen and (max-width: 980px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		height: 460px;
		margin-right: 0px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 600px;
		position: relative;
	}
`;

const Text = styled.div`
	font-size: 33px;
	color: ${(props) => props.theme.colors.white};
	margin-top: 30px;
	margin-left: 34px;
	@media screen and (max-width: 980px) {
		margin: 0 0 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 24px;
		margin-bottom: 24px;
	}
`;

const RowFlex = styled.div`
	display: flex;
	margin-top: 28px;
	@media screen and (max-width: 1550px) {
		flex-direction: column;
		align-items: center;
		gap: 28px;
	}
`;

const Img2 = styled(BackgroundImg)`
	width: 315px;
	height: 309px;
	margin-left: 20px;
`;

const Img3 = styled(BackgroundImg)`
	width: 315px;
	height: 309px;
	margin-right: 20px;
	@media screen and (max-width: 980px) {
		margin: 0;
		border-radius: 20px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 280px;
		margin-bottom: 12px;
	}
`;

const Text2 = styled.div`
	font-size: 33px;
	line-height: 1.3;
	color: ${(props) => props.theme.colors.white};
	margin-top: 30px;
	padding-right: 90px;
`;

const Text3 = styled.div`
	font-size: 33px;
	line-height: 1.3;
	color: ${(props) => props.theme.colors.white};
	margin: 30px 0 30px 30px;
	text-align: end;
	@media screen and (max-width: 980px) {
		margin: 0;
		text-align: center;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 24px;
		margin-top: 12px;
	}
`;

export default ExplainMarket;
