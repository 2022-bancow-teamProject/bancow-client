import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HeadLine4 } from '../../common/typography';
import styled from 'styled-components';

export const SearchArea = styled.div`
	background-color: ${(props) => props.theme.colors.subGray};
	height: 249px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${(props) => props.theme.breakpoints.md} {
		height: 180px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 130px;
	}
`;

export const Section = styled.section`
	margin: 0 auto;
	text-align: center;
`;

export const HeadLine4Style = styled(HeadLine4)`
	margin-bottom: 35px;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 25px;
		margin-bottom: 25px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
		margin-bottom: 15px;
	}
`;

export const SearchForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 718px;
	height: 72px;
	background-color: white;
	border: none white;
	border-radius: 6px;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 500px;
		height: 60px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 300px;
		height: 35px;
	}
`;

export const SearchWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 35%;

	@media ${(props) => props.theme.breakpoints.md} {
		margin-right: 30%;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-right: 0;
	}
`;

export const AiOutlineSearchStyle = styled(AiOutlineSearch)`
	width: 40px;
	height: 40px;
	margin: 0 20px 0 20px;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 30px;
		height: 30px;
		margin: 0 12px 0 12px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 15px;
		height: 15px;
		margin: 0 4px 0 4px;
	}
`;

export const SearchBar = styled.input`
	border: none;
	width: 382px;

	::placeholder {
		font-size: 20px;
	}

	::-webkit-input-placeholder,
	:-ms-input-placeholder {
		font-size: 20px;
	}

	&:focus {
		outline: none;
		text-align: left;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		width: 300px;
		height: 20px;
		::placeholder {
			font-size: 16px;
		}
		::-webkit-input-placeholder,
		:-ms-input-placeholder {
			font-size: 16px;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 270px;
		height: 16px;
		::placeholder {
			font-size: 12px;
		}
		::-webkit-input-placeholder,
		:-ms-input-placeholder {
			font-size: 12px;
		}
	}
`;

// TODO: Form에 검색 api 연결
const Search = () => {
	return (
		<SearchArea>
			<Section>
				<HeadLine4Style>궁금한 점이 있으신가요?</HeadLine4Style>
				<SearchForm>
					<SearchWrapper>
						<AiOutlineSearchStyle />
						<label htmlFor="keyword"></label>
						<SearchBar type="text" id="keyword" placeholder="검색어를 입력하시고 엔터를 눌러주세요." />
					</SearchWrapper>
				</SearchForm>
			</Section>
		</SearchArea>
	);
};

export default Search;
