import { AppShell } from '@mantine/core';
import AppRoutes from './AppRoutes';
import NavigationBar from './components/Navigation';

function App() {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<AppShell.Header>
				<NavigationBar />
			</AppShell.Header>
			<AppShell.Main>
				<AppRoutes />
			</AppShell.Main>
		</AppShell>
	);
}

export default App;
