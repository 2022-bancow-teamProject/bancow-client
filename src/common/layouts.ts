import styled from 'styled-components';

export const Wrapper = styled.div`
	height: calc(100vh - 68px);
	background-color: ${(props) => props.theme.alt.backgroud1};
	@media ${(props) => props.theme.breakpoints.md} {
		height: calc(100vh - 50px);
	}
`;

export const InnerBox = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	@media ${(props) => props.theme.breakpoints.md} {
		justify-content: center;
		align-items: center;
	}
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RowSpaceBetween = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DownloadAppIconBox = styled.div`
	width: 200px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 130px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100px;
	}
`;
