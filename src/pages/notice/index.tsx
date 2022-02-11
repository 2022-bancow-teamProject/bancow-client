import { useRouter } from 'next/router';
import { Wrapper } from '../../common/layouts';
import NoticeDetail from '../../component/notice/components/NoticeDetail';
import NoticeHeader from '../../component/notice/NoticeHeader';
import NoticeMain from '../../component/notice/NoticeMain';

const Notice = () => {
	const { query } = useRouter();
	return (
		<Wrapper>
			<NoticeHeader />
			{query.noticeID ? <NoticeDetail /> : <NoticeMain />}
		</Wrapper>
	);
};

export default Notice;
