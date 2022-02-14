import type { AppProps } from 'next/app';
import Theme from '../styles/theme';
import GNB from '../common/global/GNB';
import 'material-icons/iconfont/material-icons.css';
import { wrapper } from '../redux/store';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
	return (
		<Theme>
			<GNB />
			<Component {...pageProps} />
		</Theme>
	);
};

export default wrapper.withRedux(App);
