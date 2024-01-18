import { AppShell } from '@mantine/core';
import App from './App';
import NavigationBar from './components/Navigation';

function MainLayout() {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<AppShell.Header>
				<NavigationBar />
			</AppShell.Header>
			<AppShell.Main>
				<App />
			</AppShell.Main>
		</AppShell>
	);
}

export default MainLayout;
