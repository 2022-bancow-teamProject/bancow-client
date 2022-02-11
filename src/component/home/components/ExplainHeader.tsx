import styled from 'styled-components';
import { HeadLine2, HeadLine4 } from '../../../common/typography';

interface Iprops {
	step: string;
	desc: string;
	sub?: string;
}

const ExplainHeader: React.FC<Iprops> = ({ step, desc, sub }) => {
	return (
		<>
			<UseOrder>{step}</UseOrder>
			<DescText dangerouslySetInnerHTML={{ __html: desc }} />
			{sub && <SubDescText dangerouslySetInnerHTML={{ __html: sub }} />}
		</>
	);
};

const UseOrder = styled(HeadLine4)`
	margin-bottom: 80px;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-bottom: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-bottom: 30px;
	}
`;

const DescText = styled(HeadLine2)`
	margin-bottom: 30px;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 50px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 30px;
	}
`;

const SubDescText = styled(HeadLine4)`
	@media screen and (max-width: 850px) {
		display: none;
	}
`;

export default ExplainHeader;
