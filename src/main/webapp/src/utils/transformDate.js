const padTo2Digits = (num) => {
	return num.toString().padStart(2, '0');
};

export const getDateFromMilliseconds = (milliseconds) => {
	const date = new Date(milliseconds);
	return [
		padTo2Digits(date.getDate()),
		padTo2Digits(date.getMonth() + 1),
		date.getFullYear()
	].join('/');
};

export const getMillisecondsFromDate = (date) => {
	return date.getTime();
};
