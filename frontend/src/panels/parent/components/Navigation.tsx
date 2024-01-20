import React from 'react';
import { Link } from 'react-router-dom';

const LinkStyle = { color: 'black', textDecoration: 'none' };

const ParentPanelNavigation: React.FC = () => {
	return (
		<React.Fragment>
			<Link style={LinkStyle} to="/parent/contact">
				Contact
			</Link>
			<Link style={LinkStyle} to="/parent/routine">
				Routine
			</Link>
			<Link style={LinkStyle} to="/parent/payment-invoice">
				Payment Invoices
			</Link>
			<Link style={LinkStyle} to="/parent/exam-routine">
				Exam Routine
			</Link>
		</React.Fragment>
	);
};

export default ParentPanelNavigation;
