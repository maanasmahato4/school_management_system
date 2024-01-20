import { Table } from '@mantine/core';
import {} from './@types';

const ClassRoutine = () => {
	return (
		<Table>
			<Table.Thead>
				<Table.Tr>
					<Table.Th colSpan={4} style={{textAlign: 'center'}}>Subjects</Table.Th>
				</Table.Tr>
				<Table.Tr>
					<Table.Th>Day</Table.Th>
					<Table.Th colSpan={3}>Time</Table.Th>
				</Table.Tr>
				<Table.Tr>
					<Table.Th></Table.Th>
					<Table.Th>10am-11am</Table.Th>
					<Table.Th>11am-12pm</Table.Th>
					<Table.Th>12pm-1pm</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				<Table.Tr>
					<Table.Td>Sunday</Table.Td>
					<Table.Td>english</Table.Td>
					<Table.Td>maths</Table.Td>
					<Table.Td>science</Table.Td>
				</Table.Tr>
			</Table.Tbody>
		</Table>
	);
};

export default ClassRoutine;
