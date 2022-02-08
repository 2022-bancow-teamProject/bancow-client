import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme, themeDefault } from '../themes/default';
import { GlobalStyles } from './globals';
import { RootState } from '../redux/modules';

const Theme = ({ children }: any) => {
	const isDark = useSelector((state: RootState) => state.thememode.isDark);
	return (
		<ThemeProvider theme={isDark ? darkTheme : themeDefault}>
			<GlobalStyles {...themeDefault} />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
