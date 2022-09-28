import { IconButton, TextField } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export const SearchField = ({ label, handleSubmit, value, setValue }) => {
	return (
		<div>
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
		</div>
	);
};
