import { Table } from '@mantine/core';
import {} from './@types';

const ExamRoutine = () => {
	return (
		<Table highlightOnHover withTableBorder withColumnBorders>
			<Table.Thead>
				<Table.Tr>
					<Table.Th>Date</Table.Th>
					<Table.Th>Day</Table.Th>
					<Table.Th colSpan={2}>Science</Table.Th>
					<Table.Th colSpan={2}>Management</Table.Th>
				</Table.Tr>
				<Table.Tr>
					<Table.Th></Table.Th>
					<Table.Th></Table.Th>
					<Table.Th>Subject</Table.Th>
					<Table.Th>Time</Table.Th>
					<Table.Th>Subject</Table.Th>
					<Table.Th>Time</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				<Table.Tr>
					<Table.Td>07/11</Table.Td>
					<Table.Td>wednesday</Table.Td>
					<Table.Td>physics</Table.Td>
					<Table.Td>1pm-2pm</Table.Td>
					<Table.Td>Social</Table.Td>
					<Table.Td>3pm-4pm</Table.Td>
				</Table.Tr>
			</Table.Tbody>
		</Table>
	);
};

export default ExamRoutine;
