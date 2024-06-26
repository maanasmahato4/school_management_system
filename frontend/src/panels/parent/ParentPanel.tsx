import { AppShell } from '@mantine/core';
import ParentPanelNavigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

const ParentPanel = () => {
	return (
		<AppShell
			navbar={{
				width: 300,
				breakpoint: 'sm',
			}}
			padding="md"
		>
			<AppShell.Navbar p="md">
				<ParentPanelNavigation />
			</AppShell.Navbar>
			<AppShell.Main p="sm">
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
};

export default ParentPanel;
