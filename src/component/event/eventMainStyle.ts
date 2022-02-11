import styled from 'styled-components';

export const Section = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud1};
	padding: 80px 0;
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 40px 0;
	}
`;

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-gap: 40px;
	grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
