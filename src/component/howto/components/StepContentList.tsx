import { BackgroundImg } from '../../../common/layouts';
import StepContentBox from './StepContentBox';
import styled from 'styled-components';

interface IProps {
	trigger: (stepNum: number) => void;
}

const StepContentList: React.FC<IProps> = ({ trigger }) => {
	return (
		<>
			<StepContentBox
				title="STEP 01. 예치금 입금하기"
				desc="예치금은 한우 구매 시 사용하는 돈이예요. 먼저 부여된 나만의 예치금 계좌에 입금해 준비해주세요."
				trigger={trigger}
				stepNum={0}
			>
				<Img2 url="/howtopage/howto2.png" />
			</StepContentBox>
			<StepContentBox
				title="STEP 02. 구매하기"
				desc="우선 현재 구매 가능한 송아지들을 둘러볼 수 있어요. 4만원부터 원하는 지분 만큼 한우 구매가 가능해요."
				subdesc="유전지수, 농가등급, 예상수익률 확인"
				trigger={trigger}
				stepNum={1}
				right
			>
				<Img3 url="/howtopage/howto3.png" />
			</StepContentBox>
			<StepContentBox
				title="STEP 03. 사육 중"
				desc="농가에서 알아서 키워주는 내 소가 자라는 모습을 업데이트 되는 사진으로 확인 할 수 있어요."
				subdesc="체중, 건강검진 내역 확인"
				trigger={trigger}
				stepNum={2}
			>
				<Img4 url="/howtopage/howto4.png" />
			</StepContentBox>
			<StepContentBox
				title="STEP 04. 출하조회"
				desc="내 소의 출하 과정을 실시간으로 보고 출하부터 등급 판정까지 한 눈에 알 수 있어요."
				subdesc="출하일, 도축일, 경매일, 판정결과, 수익금, 수익률"
				trigger={trigger}
				stepNum={3}
				right
			>
				<Img5 url="/howtopage/howto5.png" />
			</StepContentBox>
			<StepContentBox
				title="STEP 05. 경매완료"
				desc="드디어 내 한우의 경매가 완료 되었어요! 내 자산의 최종적인 수익률과 수익금을 확인할 수 있어요."
				trigger={trigger}
				stepNum={4}
			>
				<Img6 url="/howtopage/howto6.png" />
			</StepContentBox>
		</>
	);
};

const Img2 = styled(BackgroundImg)`
	width: 392px;
	height: 781px;
	@media screen and (max-width: 1230px) {
		width: 250px;
		height: 498px;
	}
	@media screen and (max-width: 710px) {
		display: none;
	}
`;

const Img3 = styled(BackgroundImg)`
	width: 392px;
	height: 643px;
	@media screen and (max-width: 1230px) {
		width: 250px;
		height: 410px;
	}
	@media screen and (max-width: 710px) {
		display: none;
	}
`;

const Img4 = styled(BackgroundImg)`
	width: 420px;
	height: 610px;
	@media screen and (max-width: 1230px) {
		width: 300px;
		height: 436px;
	}
	@media screen and (max-width: 710px) {
		display: none;
	}
`;

const Img5 = styled(BackgroundImg)`
	width: 400px;
	height: 690px;
	@media screen and (max-width: 1230px) {
		width: 290px;
		height: 500px;
	}
	@media screen and (max-width: 710px) {
		display: none;
	}
`;

const Img6 = styled(BackgroundImg)`
	width: 392px;
	height: 802px;
	@media screen and (max-width: 1230px) {
		width: 300px;
		height: 614px;
	}
	@media screen and (max-width: 710px) {
		display: none;
	}
`;

export default StepContentList;
