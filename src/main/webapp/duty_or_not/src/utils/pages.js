export const getPagesCount = (totalCount, cardsPerPage) => {
	return Math.ceil(+totalCount / +cardsPerPage);
};
