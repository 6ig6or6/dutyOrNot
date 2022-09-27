import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import { CardBlock } from './CardBlock';
import CardService from '../API/CardService';
import { Box, CircularProgress, Pagination, Typography } from '@mui/material';
import { useFetching } from '../hooks/useFetching';
import { SettingsForm } from './SettingsForm';

export const CardsContainer = () => {
	const [fetchCards, isCardsLoading, cardsError] = useFetching(async () => {
		const cards = await CardService.getAll();
		console.log(cards.data);
	});
	const [params, setParams] = useState('');
	const [pagesCount, setPagesCount] = useState(1);
	const [cardsPerPage, setCardsPerPage] = useState(5);
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
		}
	]);

	const handlePageChange = () => {};
	console.log(cardsPerPage);
	useEffect(() => {
		fetchCards();
	}, []);

	return (
		<Container sx={{ py: 8 }} maxWidth="xl">
			{cardsError && (
				<Typography variant="h2" color="error" textAlign="center">
					{cardsError}
				</Typography>
			)}
			{isCardsLoading ? (
				<CircularProgress
					color="primary"
					size={40}
					sx={{ display: 'block', m: '0 auto' }}
				/>
			) : (
				<>
					<SettingsForm
						cardsPerPage={cardsPerPage}
						setCardsPerPage={(e) => {
							setCardsPerPage(e.target.value);
						}}
					/>
					<Grid
						container
						spacing={4}
						justifyContent="flex-start"
						alignItems="flex-start"
					>
						{cards.map((card) => (
							<Grid item key={card.id} xs={12} sm={6} md={4}>
								<CardBlock card={card} />
							</Grid>
						))}
					</Grid>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							pt: '20px'
						}}
					>
						<Pagination
							count={pagesCount}
							color="primary"
							shape="rounded"
							onChange={handlePageChange}
							boundaryCount={2}
							sx={{ display: 'block', m: '10 auto' }}
						/>
					</Box>
				</>
			)}
		</Container>
	);
};
