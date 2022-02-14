import styled from 'styled-components';
import { Col } from '../layouts';
import { InfoBox } from '../typography';

const CompanyLinks = () => {
	return (
		<Col>
			<InfoBox>Follow Us On:</InfoBox>
			<Row>
				<a href="https://www.youtube.com/channel/UCATOmelT_aoRb484L3DU-DQ" target="_blank" rel="noreferrer">
					<img src="/linkicons/youtube.png" alt="youtube link" width={40} />
				</a>
				<a href="https://www.instagram.com/bancow_official/" target="_blank" rel="noreferrer">
					<img
						src="/linkicons/instagram.png"
						alt="instagram link"
						style={{ backgroundColor: 'white', borderRadius: '9px' }}
						width={40}
					/>
				</a>
				<a href="http://pf.kakao.com/_dzLCs/chat" target="_blank" rel="noreferrer">
					<img src="/linkicons/kakaotalk.png" alt="kakaotalk link" style={{ borderRadius: '9px' }} width={40} />
				</a>
				<a href="https://blog.naver.com/bancow_official" target="_blank" rel="noreferrer">
					<img src="/linkicons/naverblog.png" alt="naverblog link" width={40} />
				</a>
			</Row>
			<InfoBox>
				Copyright © 2022
				<br />
				stockeeper Co., Ltd.
			</InfoBox>
		</Col>
	);
};

const Row = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 16px;
`;

export default CompanyLinks;
