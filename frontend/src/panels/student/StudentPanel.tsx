import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import StudentPanelNavigation from './components/Navigation';

const StudentPanel = () => {
	return (
		<AppShell
			navbar={{
				width: 300,
				breakpoint: 'sm',
			}}
		>
			<AppShell.Navbar p="sm">
				<StudentPanelNavigation />
			</AppShell.Navbar>
			<AppShell.Main p="sm">
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
};

export default StudentPanel;
