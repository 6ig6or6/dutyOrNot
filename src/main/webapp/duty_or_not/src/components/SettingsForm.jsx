import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import React from 'react';

export const SettingsForm = ({ cardsPerPage, setCardsPerPage }) => {
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<InputLabel id="CardsPerPage">Показывать по</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={cardsPerPage}
				label="CardsPerPage"
				onChange={setCardsPerPage}
			>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={10}>10</MenuItem>
				<MenuItem value={20}>20</MenuItem>
			</Select>
		</FormControl>
	);
};
