import React from 'react';
import { Container } from '@mui/system';

import Grid from '@mui/material/Grid';
import { useState } from 'react';

import { CardBlock } from './CardBlock';

export const CardsContainer = () => {
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

	// useEffect(() => {}, []);

	return (
		<Container sx={{ py: 8 }} maxWidth="xl">
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
		</Container>
	);
};
