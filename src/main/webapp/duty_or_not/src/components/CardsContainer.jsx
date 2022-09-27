import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import { CardBlock } from './CardBlock';
import CardService from '../API/CardService';
import { CircularProgress } from '@mui/material';
import { useFetching } from '../hooks/useFetching';

export const CardsContainer = () => {
	const [fetchCards, isCardsLoading, cardsError] = useFetching(async () => {
		const cards = await CardService.getAll();
		console.log(cards.data);
	});
	const [params, setParams] = useState('');
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
			creationDate: 1664443200000
		},
		{
			id: 3,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'NGM',
			caseDate: 1664053200000,
			creationDate: 16641414200000
		},
		{
			id: 4,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'NGI',
			caseDate: 1664053200000,
			creationDate: 1664242400000
		},
		{
			id: 5,
			title: 'Незаращение овального окна 4мм',
			comment:
				'По данному диагнозу Витебским военкоматом была выдана годность НГМ в 2020 году',
			paragraph: '80В',
			category: 'VN',
			caseDate: 1664053200000,
			creationDate: 1632053200000
		}
	]);

	useEffect(() => {
		fetchCards();
	}, []);

	return (
		<Container sx={{ py: 8 }} maxWidth="xl">
			{cardsError && <h1>{cardsError}</h1>}
			{isCardsLoading ? (
				<CircularProgress
					color="primary"
					size={40}
					sx={{ display: 'block', m: '0 auto' }}
				/>
			) : (
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
			)}
		</Container>
	);
};
