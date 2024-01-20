import { Card, Grid } from '@mantine/core';
import {} from './@types';

const Contacts = () => {
	return (
		<Grid grow>
			<Grid.Col span={4}>
				<Card shadow="md">
					<h3>Name: principal: principal</h3>
					<p>Email: principal@gmail.com</p>
					<p>Ph no.: 999999999</p>
				</Card>
			</Grid.Col>
			<Grid.Col span={4}>
				<Card shadow="md">
					<h3>Name: principal: principal</h3>
					<p>Email: principal@gmail.com</p>
					<p>Ph no.: 999999999</p>
				</Card>
			</Grid.Col>
			<Grid.Col span={4}>
				<Card shadow="md">
					<h3>Name: principal: principal</h3>
					<p>Email: principal@gmail.com</p>
					<p>Ph no.: 999999999</p>
				</Card>
			</Grid.Col>
			<Grid.Col span={4}>
				<Card shadow="md">
					<h3>Name: principal: principal</h3>
					<p>Email: principal@gmail.com</p>
					<p>Ph no.: 999999999</p>
				</Card>
			</Grid.Col>
		</Grid>
	);
};

export default Contacts;
