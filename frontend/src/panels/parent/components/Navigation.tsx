import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LinkStyle = {
	color: 'black',
	textDecoration: 'none',
	marginBlock: '0.3rem',
};

const ParentPanelNavigation = () => {
	return (
		<Fragment>
			<Link style={LinkStyle} to="contacts">
				Contact
			</Link>
			<Link style={LinkStyle} to="class-routine">
				Routine
			</Link>
			<Link style={LinkStyle} to="payment-invoices">
				Payment Invoices
			</Link>
			<Link style={LinkStyle} to="exam-routine">
				Exam Routine
			</Link>
		</Fragment>
	);
};

export default ParentPanelNavigation;
