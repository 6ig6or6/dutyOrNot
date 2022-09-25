const categories = {
	G: ['Г', '#d50000'],
	GO: ['ГО', '#ff5252'],
	NGM: ['НГМ', '#81c784'],
	NGI: ['НГИ', '#4caf50'],
	VN: ['ВН', '#00c853']
};

export const transformCategory = (category) => {
	return {
		name: categories[category][0],
		color: categories[category][1]
	};
};
