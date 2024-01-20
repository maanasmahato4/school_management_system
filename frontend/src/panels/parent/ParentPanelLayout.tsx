import { AppShell } from '@mantine/core';
import ParentPanel from './ParentPanel';
import ParentPanelNavigation from './components/Navigation';

const ParentPanelLayout= () => {
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
				<ParentPanel />
			</AppShell.Main>
		</AppShell>
	);
};

export default ParentPanelLayout;
