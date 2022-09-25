import React from 'react';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Box, Modal } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { transformCategory } from '../utils/transformCategory';

export const CardsContainer = ({ theme }) => {
	console.log(theme);
	const [cards, setCards] = useState([
		{
			id: 1,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'G',
			caseDate: 1604277230022,
			creationDate: 1664053200000
		},
		{
			id: 2,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'GO',
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
			category: 'NGI',
			caseDate: 1664053200000,
			creationDate: 1664053200000
		},
		{
			id: 5,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'VN',
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
				justifyContent="flex-start"
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
								<Typography
									variant="body2"
									mb={2}
									noWrap={true}
								>
									{card.comment}
								</Typography>
								<Box
									sx={{
										borderRadius: '10px',
										width: 'max-content',
										bgcolor: transformCategory(
											card.category
										).color
									}}
									pr={2}
									pl={2}
								>
									<Typography variant="h5" color="#ffffff">
										{transformCategory(card.category).name}
									</Typography>
								</Box>
							</CardContent>

							<CardActions>
								<Button
									onClick={handleOpen}
									variant="contained"
								>
									Больше информации
								</Button>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-around',
										width: '100%'
									}}
								>
									<Box
										variant="body2"
										paragraph
										pl={1}
										mb={0}
									>
										Создано:
										<Typography
											variant="body2"
											paragraph
											mb={0}
										>
											{new Date(card.caseDate)
												.toISOString()
												.slice(0, 10)}
										</Typography>
									</Box>
									<Box variant="body2" paragraph>
										Поставлен диагноз:
										<Typography
											variant="body2"
											paragraph
											mb={0}
										>
											{new Date(card.creationDate)
												.toISOString()
												.slice(0, 10)}
										</Typography>
									</Box>
								</Box>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
