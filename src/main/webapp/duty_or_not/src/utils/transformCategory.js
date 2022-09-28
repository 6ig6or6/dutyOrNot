const categories = {
	G: ['Г', '#e91616'],
	GO: ['ГО', '#f05c5c'],
	NGM: ['НГМ', '#99ff99'],
	NGI: ['НГИ', '#80ff80'],
	VN: ['ВН', ' #ffcc66']
};

const categoriesBackwards = {
	Г: 'G',
	ГО: 'GO',
	НГМ: 'NGM',
	НГИ: 'NGI',
	ВН: 'VN'
};

export const transformCategory = (category) => {
	return {
		name: categories[category][0],
		color: categories[category][1]
	};
};

export const transformCategoryBackwards = (category) => {
	return categoriesBackwards[category];
};
