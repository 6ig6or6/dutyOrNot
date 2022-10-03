import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { SignInBtn } from './SignInBtn';

export const TopBar = () => {
	return (
		<AppBar position="relative">
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant="h6" color="inherit" noWrap>
					А ты годен?
				</Typography>
				<SignInBtn />
			</Toolbar>
		</AppBar>
	);
};