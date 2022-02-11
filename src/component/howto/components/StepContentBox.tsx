import { HiArrowSmRight } from 'react-icons/hi';
import { Emphasis, HeadLine3, HeadLine5 } from '../../../common/typography';
import { RowSpaceBetween } from '../../../common/layouts';
import styled from 'styled-components';

interface IProps {
	title: string;
	desc: string;
	subdesc?: string;
	trigger: (stepNum: number) => void;
	stepNum: number;
	right?: boolean;
	children: JSX.Element;
}

const StepContentBox: React.FC<IProps> = ({ title, desc, subdesc, trigger, stepNum, right = false, children }) => {
	return (
		<CenterBox>
			{!right && children}
			<TextBox>
				<Text>
					<Emphasis>{title}</Emphasis>
				</Text>
				<Text>
					{desc}
					{subdesc && <SubInfo as="p">*{subdesc}</SubInfo>}
				</Text>
				<LinkText onClick={() => trigger(stepNum)}>
					영상 가이드 <HiArrowSmRight />
				</LinkText>
			</TextBox>
			{right && children}
		</CenterBox>
	);
};

const CenterBox = styled(RowSpaceBetween)`
	width: 80%;
	height: 850px;
	margin: 120px auto 0;
	@media screen and (max-width: 1230px) {
		margin-top: 30px;
		height: 700px;
	}
	@media screen and (max-width: 710px) {
		justify-content: center;
		height: 600px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 360px;
	}
`;

const TextBox = styled.div`
	max-width: 850px;
	@media screen and (max-width: 1600px) {
		max-width: 550px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 300px;
	}
`;

const Text = styled(HeadLine3)`
	margin-bottom: 80px;
	color: ${(props) => props.theme.alt.text1};
	@media screen and (max-width: 1600px) {
		font-size: 42px;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		margin-bottom: 60px;
		font-size: 26px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-bottom: 40px;
		font-size: 20px;
	}
`;

const LinkText = styled.button`
	font-size: 24px;
	color: ${(props) => props.theme.colors.subPoint};
	display: flex;
	align-items: center;
	cursor: pointer;
	border: none;
	background-color: transparent;
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

const SubInfo = styled(HeadLine5)`
	color: ${(props) => props.theme.alt.text2};
	transform: translateY(10px);
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

export default StepContentBox;
