import React from 'react';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Chip, Modal } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { transformCategory } from '../utils/transformCategory';
import { deepOrange } from '@mui/material/colors';

export const CardsContainer = ({ theme }) => {
	console.log(theme);
	const [cards, setCards] = useState([
		{
			id: 1,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'NGM',
			caseDate: 1664053200000,
			creationDate: 1664053200000
		},
		{
			id: 2,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'G',
			caseDate: 1664053200000,
			creationDate: 1664053200000
		},
		{
			id: 3,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'NGM',
			caseDate: 1664053200000,
			creationDate: 1664053200000
		},
		{
			id: 4,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'GO',
			caseDate: 1664053200000,
			creationDate: 1664053200000
		}
	]);

	const handleOpen = () => {
		return <Modal />;
	};

	useEffect(() => {}, []);

	return (
		<Container sx={{ py: 8 }} maxWidth="xl">
			<Grid
				container
				spacing={4}
				justifyContent="space-between"
				alignItems="center"
			>
				{cards.map((card) => (
					<Grid item key={card.id} xs={12} sm={6} md={4}>
						<Card
							variant="outlined"
							sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									mb={2}
								>
									{card.title}
								</Typography>
								<Typography variant="body2" mb={2}>
									{card.comment}
								</Typography>
								<Typography
									variant="h5"
									mb={2}
									color={
										transformCategory(card.category).color
									}
								>
									{transformCategory(card.category).name}
								</Typography>
							</CardContent>

							<CardActions>
								<Button
									onClick={handleOpen}
									variant="contained"
								>
									Больше ифнормации
								</Button>
								<Typography variant="body2" paragraph pl={1}>
									Создано: 09.09.2022
								</Typography>
								<Typography variant="body2" paragraph pl={1}>
									Поставлен диагноз: 09.09.2022
								</Typography>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
