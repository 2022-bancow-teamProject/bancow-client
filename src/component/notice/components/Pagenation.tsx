import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';

const PagenationBox = styled.div`
	margin-top: 50px;
	font-size: 23px;
	display: flex;
	@media ${(props) => props.theme.breakpoints.md} {
	}
	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;

const Pagenation = () => {
	return (
		<PagenationBox>
			<FiChevronLeft style={{ fontSize: '28px', marginLeft: 2, cursor: 'pointer' }} />
			<span>1 / 5</span>
			<FiChevronRight style={{ fontSize: '28px', marginLeft: 2, cursor: 'pointer' }} />
		</PagenationBox>
	);
};

export default Pagenation;
