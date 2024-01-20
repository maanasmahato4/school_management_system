import { Container, Text } from '@mantine/core';
import ExamRoutine from '../../../components/ExamRoutine/ExamRoutine';
import '../style/index.css';

const ParentPanelExamRoutine = () => {
	return (
		<Container>
			<Text style={{ textAlign: 'center', fontWeight: 'bold' }} size="xl">
				Exam routine for 1st terminal Exam
			</Text>
			<ExamRoutine />
		</Container>
	);
};

export default ParentPanelExamRoutine;
