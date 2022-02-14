import { useRouter } from 'next/dist/client/router';
import NoticeDetail from '../../component/notice/components/NoticeDetail';
import NoticeHeader from '../../component/notice/NoticeHeader';
import NoticeMain from '../../component/notice/NoticeMain';

const Notice = () => {
	const { query } = useRouter();
	return (
		<>
			<NoticeHeader />
			{query.noticeID ? <NoticeDetail /> : <NoticeMain />}
		</>
	);
};

export default Notice;
