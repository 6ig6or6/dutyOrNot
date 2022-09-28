import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import React from 'react';

export const SettingsForm = ({ state, setState, title, items, label }) => {
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<InputLabel id={label}>{title}</InputLabel>
			<Select id={label} value={state} label={label} onChange={setState}>
				{items.map((item) => {
					return item === 'Все' ? (
						<MenuItem value="">
							<em>{item}</em>
						</MenuItem>
					) : (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};
