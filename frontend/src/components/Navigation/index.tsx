import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Group, ActionIcon } from '@mantine/core';
import { IconLogout2 } from '@tabler/icons-react';

const LinkStyle = { color: 'black', textDecoration: 'none' };

const NavigationBar: React.FC = () => {
	return (
		<Flex justify="space-between" style={{ marginInline: '1rem' }}>
			<p>logo</p>
			<Group>
				<Link to="/" style={LinkStyle}>
					Dashboard
				</Link>
				<Link to="/signup" style={LinkStyle}>
					SignUp
				</Link>
				<Link to="/signin" style={LinkStyle}>
					SignIn
				</Link>
				<Link to="/profile" style={LinkStyle}>
					Profile
				</Link>
				<ActionIcon variant="filled" color="red">
					<IconLogout2 />
				</ActionIcon>
			</Group>
		</Flex>
	);
};

export default NavigationBar;
