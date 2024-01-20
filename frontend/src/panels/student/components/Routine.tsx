import { Container, Text } from '@mantine/core';
import ClassRoutine from '../../../components/ClassRoutine/ClassRoutine';

const StudentPanelClassRoutine = () => {
	return (
		<Container>
			<Text
				style={{ textAlign: 'center', fontWeight: 'bold', marginBlock: '0.5rem' }}
				size="xl"
			>
				Class Routine for this session
			</Text>
			<ClassRoutine />
		</Container>
	);
};

export default StudentPanelClassRoutine;
