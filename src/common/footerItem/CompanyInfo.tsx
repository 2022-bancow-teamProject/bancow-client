import { InfoBox } from '../typography';

const CompanyInfo = () => {
	return (
		<div>
			<img src="companylogo.png" alt="company logo" />
			<InfoBox>
				주소 서울특별시 마포구 마포대로 122, 12층 14층 (우. 04213)
				<br />
				사업자등록번호 574-81-01983
				<br />
				통신판매업신고번호 2020-서울중구-3078호
				<br />
				대표자 안재현
				<br />
				고객센터 support@stockeeper.co, 02-2274-2517
				<br />
				제휴 및 대외협력 bancow_official@naver.com
			</InfoBox>
		</div>
	);
};

export default CompanyInfo;
