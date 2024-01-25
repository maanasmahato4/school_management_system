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
			<Link style={LinkStyle} to="manage-marks">
				Exam Marks
			</Link>
			<Link style={LinkStyle} to="class-routine">
				Class Routine
			</Link>
			<Link style={LinkStyle} to="study-materials">
				Study Materials
			</Link>
			<Link style={LinkStyle} to="contacts">
				Contacts
			</Link>
			<Link style={LinkStyle} to="manage-exam">
				Manage Exam
			</Link>
			<Link style={LinkStyle} to="manage-students">
				Manage Students
			</Link>
			<Link style={LinkStyle} to="manage-attendance">
				Manage Attendance
			</Link>
		</Fragment>
	);
};

export default StudentPanelNavigation;
