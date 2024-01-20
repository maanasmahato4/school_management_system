import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
	return (
		<Fragment>
			<Outlet/>
		</Fragment>
	);
};

export default DashBoard;
