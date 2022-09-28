import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardsContainer } from './components/CardsContainer';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TopBar } from './components/TopBar';

const theme = createTheme();

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<TopBar />
			<main>
				{/* <Hero /> */}
				<CardsContainer />
			</main>
			{/* Footer */}
			<Footer />
			{/* End footer */}
		</ThemeProvider>
	);
}
