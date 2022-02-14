import React from 'react';
import styled from 'styled-components';
import { HeadLine5 } from '../../common/typography';

const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 80px 0;
	background: ${(props) => props.theme.alt.backgroud1};
	span {
		color: ${(props) => props.theme.colors.gray2};
	}
	.notice {
		margin: 50px 0;
		@media ${(props) => props.theme.breakpoints.sm} {
			font-size: 12px;
		}
	}
	@media ${(props) => props.theme.breakpoints.md} {
		height: 380px;
		padding: 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 300px;
		padding: 0 5%;
	}
`;

const HeadLine5Style = styled(HeadLine5)`
	color: ${(props) => props.theme.alt.text2};
	line-height: 1.7;
	text-align: center;
	strong {
		color: ${(props) => props.theme.colors.point};
	}
	span {
		color: inherit;
		@media ${(props) => props.theme.breakpoints.sm} {
			display: block;
		}
	}
	.br-span {
		display: block;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 18px;
		text-align: center;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

const BtnDownLoad = styled.a`
	width: 238px;
	height: 48px;
	cursor: pointer;
	font-size: 18px;
	line-height: 48px;
	color: ${(props) => props.theme.colors.dark};
	background: #fff;
	border-radius: 10px;
	border: 1px solid ${(props) => props.theme.colors.gray2};
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	padding-left: 14px;
	@media ${(props) => props.theme.breakpoints.md} {
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 220px;
		font-size: 16px;
	}
	div {
		width: 48px;
		height: 56px;
		background: ${(props) => props.theme.colors.gray4};
		opacity: 0.6;
		display: flex;
		justify-content: center;
		align-items: center;
		.material-icons-outlined {
			display: inline-block;
			color: ${(props) => props.theme.colors.gray1};
			font-size: 22px;
		}
	}
`;
const Section2 = () => {
	return (
		<Section>
			<HeadLine5Style>
				농가가 뱅카우 서비스를 이용하기 위해서는
				<span>입점 계약이 필요합니다.</span>
				<span className="br-span">문의 주시면 상세한 입점 절차를 안내해드리겠습니다.</span>
				감사합니다.
			</HeadLine5Style>
			<span className="notice">3영업일 이내로 이메일 혹은 휴대전화로 답변드릴 예정입니다.</span>
			<BtnDownLoad
				href="https://www.bancow.co.kr/_files/ugd/38915a_3675d218f39f4fddade8734813509444.pdf"
				target="_blank"
			>
				농가 브로셔 다운로드
				<div>
					<span className="material-icons-outlined">keyboard_double_arrow_down</span>
				</div>
			</BtnDownLoad>
		</Section>
	);
};

export default Section2;
