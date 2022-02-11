import { useRouter } from 'next/router';
import { Wrapper } from '../../common/layouts';
import NoticeDetail from '../../component/notice/components/NoticeDetail';
import Section1 from '../../component/notice/Section1';
import Section2 from '../../component/notice/Section2';

const Notice = () => {
	const { query } = useRouter();
	return (
		<Wrapper>
			<Section1 />
			{query.noticeID ? <NoticeDetail /> : <Section2 />}
		</Wrapper>
	);
};

export default Notice;
