import { Container, Text } from '@mantine/core';
import ExamRoutine from '../../../components/ExamRoutine/ExamRoutine';

const ParentPanelExamRoutine = () => {
	return (
		<Container>
			<Text
				style={{ textAlign: 'center', fontWeight: 'bold', marginBlock: '0.5rem' }}
				size="xl"
			>
				Exam routine for 1st terminal Exam
			</Text>
			<ExamRoutine />
		</Container>
	);
};

export default ParentPanelExamRoutine;
