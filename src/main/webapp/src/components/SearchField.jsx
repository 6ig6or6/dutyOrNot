import { Box, IconButton, TextField, useMediaQuery } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export const SearchField = ({ label, handleSubmit, value, setValue }) => {
	const fitInto900_1300 = useMediaQuery(
		'(min-width:900px) and (max-width: 1300px)'
	);
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: fitInto900_1300 ? 'column' : 'row'
			}}
		>
			<TextField
				id={label}
				label={label}
				variant="standard"
				size="small"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.code === 'Enter') {
						e.preventDefault();
						handleSubmit(e, value);
					}
				}}
			/>
			<Box sx={{ display: 'flex' }}>
				<IconButton
					type="button"
					aria-label="search"
					onClick={(e) => {
						handleSubmit(e, value);
					}}
				>
					<SearchIcon fontSize="large" color="primary" disabled />
				</IconButton>
				<IconButton
					type="reset"
					aria-label="search"
					onClick={(e) => {
						setValue('');
						handleSubmit(e, '');
					}}
				>
					<SearchOffIcon fontSize="large" color="error" />
				</IconButton>
			</Box>
		</Box>
	);
};
