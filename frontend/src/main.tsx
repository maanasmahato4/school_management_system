import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import MainLayout from './MainLayout.tsx';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider>
			<BrowserRouter>
				<MainLayout />
			</BrowserRouter>
		</MantineProvider>
	</React.StrictMode>,
);
