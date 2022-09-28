import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import { CardBlock } from './CardBlock';
import CardService from '../API/CardService';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {
	Box,
	CircularProgress,
	Pagination,
	TextField,
	Typography
} from '@mui/material';
import { useFetching } from '../hooks/useFetching';
import { SettingsForm } from './SettingsForm';
import { getPagesCount } from '../utils/pages';

export const CardsContainer = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [cardsPerPage, setCardsPerPage] = useState(5);
	const [filterParams, setFilterParams] = useState({
		page: currentPage,
		limit: cardsPerPage,
		title: '',
		comment: '',
		paragraph: '',
		category: ''
	});
	const [cards, setCards] = useState([
		{
			id: 1,
			title: '',
			comment: '',
			paragraph: '40В',
			category: 'GO',
			caseDate: 1664053200000,
			creationDate: 1664053200000
		}
	]);
	const [fetchCards, isCardsLoading, cardsError] = useFetching(async () => {
		const cards = await CardService.getAll(
			cardsPerPage,
			currentPage,
			filterParams.title,
			filterParams.comment,
			filterParams.paragraph,
			filterParams.category
		);
		setCards(cards.data);

		const totalNum = cards.headers['x-total-count'];
		setTotalPages(getPagesCount(totalNum, cardsPerPage));
	});

	const handlePageChange = (e, page) => {
		setCurrentPage(page);
		e.preventDefault();
	};

	useEffect(() => {
		fetchCards();
	}, [cardsPerPage, currentPage, filterParams]);
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
					<Box sx={{ display: 'flex', gap: '15px' }}>
						<SettingsForm
							label="Показывать по"
							items={[5, 10, 20]}
							title="Показывать по"
							state={cardsPerPage}
							setState={(e) => {
								setCardsPerPage(e.target.value);
								setCurrentPage(1);
							}}
						/>
						<SettingsForm
							label="Категория"
							items={['Все', 'Г', 'ГО', 'НГМ', 'НГИ', 'ВН']}
							title="Категория"
							state={filterParams.category}
							setState={(e) => {
								setFilterParams((prev) => ({
									...prev,
									category: e.target.value || ''
								}));
								setCurrentPage(1);
							}}
						/>
						<TextField
							id="outlined-basic"
							label="Искать по названию"
							variant="standard"
							size="small"
						/>
					</Box>
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
						{cards.length !== 0 ? (
							<Pagination
								count={+totalPages}
								color="primary"
								shape="rounded"
								page={currentPage}
								onChange={handlePageChange}
								boundaryCount={2}
								sx={{ display: 'block', m: '10 auto' }}
							/>
						) : undefined}
					</Box>
				</>
			)}
			{!cards.length && (
				<Typography
					variant="h3"
					color="error"
					textAlign="center"
					py={4}
				>
					По данному запросу ничего не найдено{' '}
					<SentimentVeryDissatisfiedIcon fontSize="large" />
				</Typography>
			)}
		</Container>
	);
};
