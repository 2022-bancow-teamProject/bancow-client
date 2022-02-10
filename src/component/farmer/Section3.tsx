import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';

const Section = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud7};
	width: 1332px;
	margin: 0 auto 40px;
	display: flex;
	justify-content: right;
	align-items: center;
	background: ${(props) => props.theme.alt.backgroud1}
		url('https://static.wixstatic.com/media/38915a_d6e86a0ce6fd46369ccbabfebdc36acd~mv2.jpg/v1/fill/w_1394,h_2220,al_c,q_90,usm_0.66_1.00_0.01/38915a_d6e86a0ce6fd46369ccbabfebdc36acd~mv2.webp')
		no-repeat left/auto 900px;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		background: url('https://static.wixstatic.com/media/38915a_d6e86a0ce6fd46369ccbabfebdc36acd~mv2.jpg/v1/fill/w_1394,h_2220,al_c,q_90,usm_0.66_1.00_0.01/38915a_d6e86a0ce6fd46369ccbabfebdc36acd~mv2.webp')
			no-repeat center/100% auto;
		margin-bottom: 0;
		justify-content: center;
		align-items: center;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 840px;
		margin-top: 30px;
		background: url('https://static.wixstatic.com/media/38915a_d6e86a0ce6fd46369ccbabfebdc36acd~mv2.jpg/v1/fill/w_1394,h_2220,al_c,q_90,usm_0.66_1.00_0.01/38915a_d6e86a0ce6fd46369ccbabfebdc36acd~mv2.webp')
			no-repeat center/cover;
	}
`;
const RequestForm = styled.form`
	width: 740px;

	padding: 70px 125px;
	background: #fff;
	border: 1px solid ${(props) => props.theme.colors.gray2};
	@media ${(props) => props.theme.breakpoints.md} {
		width: 500px;
		padding: 65px 65px;
		border: none;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 78%;
		height: 840px;
		padding: 60px 20px;
	}
`;
const Label = styled.label`
	display: block;
	font-size: 18px;
	span {
		color: red;
		&:nth-child(2) {
			font-size: 14px;
		}
	}
	@media ${(props) => props.theme.breakpoints.md} {
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;
const Input = styled.input`
	display: block;
	width: 100%;
	height: 26px;
	font-size: 18px;
	line-height: 26px;
	margin: 20px 0;
	border: none;
	border-bottom: 1px solid ${(props) => props.theme.colors.dark};
	&.input-calendar {
		color: ${(props) => props.theme.colors.gray1};
	}
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

const BtnRequest = styled.button`
	width: 100%;
	height: 48px;
	cursor: pointer;
	font-size: 18px;
	line-height: 48px;
	color: #fff;
	background: #fff;
	border-radius: 10px;
	border: none;
	background: ${(props) => props.theme.colors.point};
	margin-top: 12px;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-top: 28px;
		font-size: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
	}
`;

type Inputs = {
	name: string;
	mobilePhone: number;
	email: string;
	farmName: string;
	farmLocation: string;
	cattlePopulation: number;
	forage: string;
	possibleDate: number;
};
const Section3 = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<Section>
			<RequestForm onSubmit={handleSubmit(onSubmit)}>
				<Label>
					이름<span>* </span>
					{errors.name && <span>&nbsp;필수입력 사항입니다.</span>}
				</Label>
				<Input placeholder="홍길동" {...register('name', { required: true })} />

				<Label>
					휴대전화번호<span>* </span>
					{errors.name && <span>&nbsp;필수입력 사항입니다.</span>}
				</Label>
				<Input placeholder="01000000000" {...register('mobilePhone', { required: true })} />
				<Label>
					이메일<span>* </span>
					{errors.name && <span>&nbsp;필수입력 사항입니다.</span>}
				</Label>
				<Input placeholder="abcd@bancow.com" {...register('email', { required: true })} />
				<Label>
					농가이름<span>* </span>
					{errors.name && <span>&nbsp;필수입력 사항입니다.</span>}
				</Label>
				<Input placeholder="00농장" {...register('farmName', { required: true })} />
				<Label>
					농가주소<span>* </span>
					{errors.name && <span>&nbsp;필수입력 사항입니다.</span>}
				</Label>
				<Input placeholder="주소" {...register('farmLocation', { required: true })} />
				<Label>
					사육두수<span>* </span>
					{errors.name && <span>&nbsp;필수입력 사항입니다.</span>}
				</Label>
				<Input placeholder="000두" {...register('cattlePopulation', { required: true })} />
				<Label>
					사용사료<span>* </span>
					{errors.name && <span>&nbsp;필수입력 사항입니다.</span>}
				</Label>
				<Input placeholder="사료명" {...register('forage', { required: true })} />
				<Label>실사 가능 일자</Label>
				<Input className="input-calendar" type="date" {...register('possibleDate', { required: true })} />
				<BtnRequest type="submit">입점 문의하기</BtnRequest>
			</RequestForm>
		</Section>
	);
};

export default Section3;
