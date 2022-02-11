import CompanyInfo from '../footerItem/CompanyInfo';
import CompanyLinks from '../footerItem/CompanyLinks';
import styled from 'styled-components';
import { RowSpaceBetween } from '../layouts';

const Footer = () => {
	return (
		<Section>
			<Box>
				<CompanyInfo />
				<CompanyLinks />
			</Box>
		</Section>
	);
};

const Section = styled.div`
	transition: ease all 0.5s;
	background-color: ${(props) => props.theme.colors.point};
`;

const Box = styled(RowSpaceBetween)`
	height: 450px;
	width: 80%;
	@media ${(props) => props.theme.breakpoints.md} {
		padding-top: 20px;
	}
	@media screen and (max-width: 870px) {
		flex-direction: column;
		height: 550px;
		padding: 34px 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 34px 0 38px;
		height: 580px;
	}
`;

export default Footer;
