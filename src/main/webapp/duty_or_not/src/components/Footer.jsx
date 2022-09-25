import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				DutyOrNot
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export const Footer = () => {
	return (
		<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
			<Typography variant="h6" align="center" gutterBottom>
				Footer
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				color="text.secondary"
				component="p"
			>
				Какой-то футер
			</Typography>
			<Copyright />
		</Box>
	);
};
