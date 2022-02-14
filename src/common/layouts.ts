import styled from 'styled-components';

export const Wrapper = styled.div`
	height: calc(100vh - 68px);
	background-color: ${(props) => props.theme.alt.backgroud1};
	@media ${(props) => props.theme.breakpoints.md} {
		height: calc(100vh - 50px);
	}
`;

export const PureInnerBox = styled.div`
	width: 80%;
	margin: 0 auto;
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

export const CenteredRowBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CenteredColBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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

export const Radius30WhiteBox = styled.div`
	border-radius: 30px;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.2);
`;

export const BackgroundImg = styled.div<{ url: string }>`
	background-image: url(${({ url }) => url});
	background-repeat: no-repeat;
	background-size: cover;
`;
