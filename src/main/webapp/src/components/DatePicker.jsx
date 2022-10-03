import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconButton, TextField, useMediaQuery } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { getMillisecondsFromDate } from '../utils/transformDate';
import { Box } from '@mui/system';

export const DatePickerCreation = ({
	label,
	handleSubmit,
	value,
	setValue
}) => {
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
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label={label}
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					onAccept={(value) => {
						handleSubmit(value);
					}}
					renderInput={(params) => (
						<TextField
							onKeyDown={(e) => {
								if (e.code === 'Enter') {
									e.preventDefault();
									handleSubmit(value);
								}
							}}
							{...params}
						/>
					)}
				/>
			</LocalizationProvider>
			<IconButton
				type="reset"
				aria-label="search"
				onClick={() => {
					setValue(new Date());
					handleSubmit({
						$d: new Date('January 1, 1970')
					});
				}}
			>
				<SearchOffIcon fontSize="large" color="error" />
			</IconButton>
		</Box>
	);
};
