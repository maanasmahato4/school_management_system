import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LinkStyle = {
	textDecoration: 'none',
	color: 'black',
	marginBlock: '0.3rem',
};

const StudentPanelNavigation = () => {
	return (
		<Fragment>
			<Link style={LinkStyle} to="exam-routine">
				Exam Routine
			</Link>
			<Link style={LinkStyle} to="exam-marks">
				Exam Marks
			</Link>
			<Link style={LinkStyle} to="class-routine">
				Class Routine
			</Link>
			<Link style={LinkStyle} to="study-materials">
				Study Materials
			</Link>
		</Fragment>
	);
};

export default StudentPanelNavigation;
