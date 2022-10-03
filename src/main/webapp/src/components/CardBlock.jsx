import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { transformCategory } from '../utils/transformCategory';
import { getDateFromMilliseconds } from '../utils/transformDate';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React, { useState } from 'react';

export const CardBlock = ({ card }) => {
	const [moreInfo, setMoreInfo] = useState(false);

	return (
		<Card
			variant="outlined"
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography gutterBottom variant="h5" component="h2" mb={2}>
					{card.title}
				</Typography>
				<Typography
					variant="body2"
					mb={2}
					noWrap={moreInfo ? false : true}
				>
					{card?.comment}
				</Typography>
				<Box
					sx={{
						borderRadius: '10px',
						width: 'max-content',
						bgcolor: transformCategory(card?.category).color
					}}
					pr={2}
					pl={2}
				>
					<Typography variant="h5" color="#ffffff">
						{transformCategory(card?.category).name}
					</Typography>
				</Box>
			</CardContent>

			<CardActions>
				<Button
					variant="contained"
					endIcon={
						moreInfo ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
					}
					onClick={() => setMoreInfo(!moreInfo)}
				>
					{moreInfo ? 'Меньше' : 'Больше'}
				</Button>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						width: '100%'
					}}
				>
					<Box variant="body2" pl={1} mb={0}>
						Создано:
						<Typography variant="body2" mb={0}>
							{getDateFromMilliseconds(card?.creationDate)}
						</Typography>
					</Box>
					<Box variant="body2">
						Поставлен диагноз:
						<Typography variant="body2" mb={0}>
							{getDateFromMilliseconds(card?.caseDate)}
						</Typography>
					</Box>
				</Box>
			</CardActions>
		</Card>
	);
};
