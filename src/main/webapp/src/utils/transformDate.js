export const getDateFromMilliseconds = (miliseconds) => {
	return new Date(miliseconds)
		.toISOString()
		.slice(0, 10)
		.split('-')
		.reverse()
		.join('/');
};

export const getMillisecondsFromDate = (date) => {
	return date.getTime();
};
