import styled from 'styled-components';
import AppleApp from '../AppleApp';
import GoogleApp from '../GoogleApp';

function AppLinkBox() {
	return (
		<ItemBox>
			<GoogleApp />
			<AppleApp />
		</ItemBox>
	);
}

const ItemBox = styled.div`
	display: flex;
	gap: 34px;
	margin: 36px auto 50px;
	@media ${(props) => props.theme.breakpoints.md} {
		gap: 20px;
		justify-content: center;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		gap: 14px;
	}
`;

export default AppLinkBox;
