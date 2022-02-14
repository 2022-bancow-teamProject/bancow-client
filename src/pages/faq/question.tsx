import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { HeadLine4, HeadLine6 } from '../../common/typography';
import Footer from '../../common/global/Footer';

export const HeadWrapper = styled.div`
	width: 100vw;
	height: 246px;
	text-align: center;
	background-color: ${(props) => props.theme.colors.subGray};
`;

export const HeadLine4Style = styled(HeadLine4)`
	padding: 64px 0 18px;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 25px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
	}
`;

export const HeadLine6Style = styled(HeadLine6)`
	color: ${(props) => props.theme.colors.dark};

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 15px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 12px;
	}
`;

export const FormStyle = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 20px;
	max-width: 814px;
	margin: 0 auto;
	padding-top: 64px;
`;

export const FormInput1 = styled.input`
	width: 244px;
	height: 34px;
	border: none;
	background-color: #c4c4c41a;
	padding: 5px;
	margin-right: 27px;

	&:focus {
		border: 1px solid #000;
		box-shadow: 0 0 10px #719ece;
	}
`;

export const FormInput2 = styled.input`
	width: 620px;
	height: 34px;
	border: none;
	background-color: #c4c4c41a;
	padding: 5px;

	&:focus {
		border: 1px solid #000;
		box-shadow: 0 0 10px #719ece;
	}
`;

export const RadioWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Radiobox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormContent = styled.textarea`
	display: block;
	width: 888px;
	height: 288px;
	border-radius: 4px;
	border: 1px solid white;
	padding: 10px 15px;
	background-color: #c4c4c41a;
	overflow: scroll;
	box-sizing: border-box;
	::placeholder {
		text-align: left;
	}

	::-webkit-input-placeholder,
	:-ms-input-placeholder {
		text-align: left;
	}

	&:focus {
		border: 1px solid #000;
		box-shadow: 0 0 10px #719ece;

		::placeholder {
			color: transparent;
		}

		::-webkit-input-placeholder,
		:-ms-input-placeholder {
			color: transparent;
		}
	}
`;

export const InputLabel = styled.label`
	line-height: 2;
	text-align: left;
	display: block;
	width: 85px;
	margin-left: 12px;
	color: #000;
	font-size: 14px;
	font-weight: 200;
`;

export const SubmitBtn = styled.button`
	width: 800px;
	height: 70px;
	background: ${(props) => props.theme.colors.subGray};
	color: ${(props) => props.theme.colors.point};
	text-transform: uppercase;
	border: none;
	margin-top: 40px;
	padding: 20px;
	font-size: 26px;
	font-weight: 400;
	letter-spacing: 10px;
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.colors.white};
		background: ${(props) => props.theme.colors.point};
	}

	@media ${(props) => props.theme.breakpoints.md} {
		width: 600px;
		height: 50px;
		font-size: 22px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 12px;
	}
`;

type FormData = {
	qna_category: string;
	name: string;
	phoneNumber: string;
	email: string;
	title: string;
	message: string;
	checked: boolean;
};

const QnaForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>();
	const onSubmit = handleSubmit(({ qna_category, name, phoneNumber, email, title, message, checked }) => {
		console.log(qna_category, name, phoneNumber, email, title, message, checked);
	});

	return (
		<>
			<HeadWrapper>
				<HeadLine4Style>궁금한 점이 있으신가요?</HeadLine4Style>
				<HeadLine6Style>뱅카우에게 바라는 점을 알려주세요.</HeadLine6Style>
				<HeadLine6Style>소중한 의견으로 항상 성장하는 기업이 되겠습니다.</HeadLine6Style>
			</HeadWrapper>
			<FormStyle onSubmit={onSubmit}>
				<RadioWrapper>
					<Radiobox>
						<input type="radio" value="alliance" name="radio" width={85} />
						<InputLabel htmlFor="alliance">제휴 문의</InputLabel>
					</Radiobox>
					<Radiobox>
						<input type="radio" value="invest" name="radio" />
						<InputLabel htmlFor="invest">투자 문의</InputLabel>
					</Radiobox>
					<Radiobox>
						<input type="radio" value="etc" name="radio" />
						<InputLabel htmlFor="etc">기타 문의</InputLabel>
					</Radiobox>
				</RadioWrapper>
				<div>
					<FormInput1 {...register('name')} placeholder="이름" />
					<FormInput1 {...register('phoneNumber')} placeholder="전화번호" />
				</div>
				<FormInput2 {...register('email')} placeholder="이메일" type="email" />
				<FormInput2 {...register('title')} placeholder="제목" />
				<FormContent {...register('message')} placeholder="메세지를 입력하세요." rows={5} cols={33} />
				<div>
					<input type="checkbox" {...register('checked')} value="yes" />
					<label htmlFor="checked" style={{ marginLeft: '5px' }}>
						본 개인정보 이용약관에 동의합니다.
					</label>
				</div>
				<SubmitBtn
					type="submit"
					onClick={() => {
						errors.name;
						errors.phoneNumber;
						errors.email;
						errors.title;
						errors.message;
					}}
				>
					제출
				</SubmitBtn>
			</FormStyle>
			<Footer />
		</>
	);
};

export default QnaForm;
