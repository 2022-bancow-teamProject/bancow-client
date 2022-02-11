import { PureInnerBox, RowSpaceBetween } from '../../common/layouts';
import SemiFaqHeader from './components/SemiFaqHeader';
import SemiFaqCard from './components/SemiFaqCard';
import styled from 'styled-components';

const SemiFaq = () => {
	return (
		<Section>
			<PureInnerBox>
				<SemiFaqHeader />
				<CardBox>
					<SemiFaqCard
						title="구매하기"
						desc="구매금액은 어떻게<br />지불하나요?"
						sub="보유하고 계신 예치금에서<br />구매하신 지분 금액만큼<br />차감됩니다."
					/>
					<SemiFaqCard
						title="사육중"
						desc="상품이 죽거나 다치면<br />어떻게 되나요?"
						sub="상품의 손실 및 손상을<br />방지하기 위하여 모든<br />상품은 가축보험에<br />가입되어 있습니다."
					/>
					<SemiFaqCard
						title="출하 및 경매"
						desc="구매부터 출하까지 얼마나<br />기간이 소요되나요?"
						sub="일반적으로 한우는<br />30개월령까지 성장한 뒤<br />출하됩니다."
					/>
					<SemiFaqCard
						title="회원 관련"
						desc="개인정보는 어디서<br />변경하나요?"
						sub="내정보-내정보수정에서<br />회원님의 정보를<br />수정가능합니다."
					/>
				</CardBox>
			</PureInnerBox>
		</Section>
	);
};

const Section = styled.div`
	position: relative;
	overflow: hidden;
	transition: ease all 0.5s;
	padding: 80px 0;
	background-color: ${(props) => props.theme.alt.backgroud1};
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0;
		height: 1680px;
	}
`;

const CardBox = styled(RowSpaceBetween)`
	width: 100%;
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

export default SemiFaq;
