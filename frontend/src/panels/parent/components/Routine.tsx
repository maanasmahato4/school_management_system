import { Container, Text } from '@mantine/core';
import ClassRoutine from '../../../components/ClassRoutine/ClassRoutine';

const ParentPanelRoutine = () => {
	return (
		<Container>
			<Text style={{ textAlign: 'center' }}>Class Routine for this session</Text>
			<ClassRoutine />
		</Container>
	);
};

export default ParentPanelRoutine;
