import { CenteredColBox } from '../../../common/layouts';
import { HeadLine4 } from '../../../common/typography';
import styled from 'styled-components';

interface IProps {
	title: string;
	desc: string;
	sub: string;
}

const SemiFaqCard: React.FC<IProps> = ({ title, desc, sub }) => {
	return (
		<Card>
			<Title>{title}</Title>
			<DescLine dangerouslySetInnerHTML={{ __html: desc }} />
			<SubLine dangerouslySetInnerHTML={{ __html: sub }} />
		</Card>
	);
};

const Card = styled(CenteredColBox)`
	width: 340px;
	height: 500px;
	border-radius: 14px;
	margin-top: 80px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	justify-content: flex-start;
	background-color: ${(props) => props.theme.alt.backgroud4};
	@media screen and (max-width: 1800px) {
		width: 300px;
		height: 460px;
	}
	@media screen and (max-width: 1550px) {
		width: 240px;
		height: 400px;
	}
	@media screen and (max-width: 1270px) {
		width: 200px;
		height: 300px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 40px;
	}
`;

const Title = styled(HeadLine4)`
	text-align: center;
	margin-top: 80px;
	margin-bottom: 70px;
	color: #000;
	@media screen and (max-width: 1270px) {
		font-size: 28px;
		margin-top: 50px;
		margin-bottom: 28px;
	}
`;

const DescLine = styled.h6`
	font-size: 19px;
	color: ${(props) => props.theme.colors.point};
	text-align: center;
	@media screen and (max-width: 1270px) {
		font-size: 16px;
	}
`;

const SubLine = styled.p`
	font-size: 16px;
	text-align: center;
	line-height: 1.3;
	margin: 20px;
	@media screen and (max-width: 1270px) {
		font-size: 14px;
	}
`;

export default SemiFaqCard;
