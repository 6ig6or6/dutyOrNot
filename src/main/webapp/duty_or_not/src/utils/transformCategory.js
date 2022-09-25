const categories = {
	G: ['Г', '#e91616'],
	GO: ['ГО', '#f05c5c'],
	NGM: ['НГМ', '#99ff99'],
	NGI: ['НГИ', '#80ff80'],
	VN: ['ВН', ' #ffcc66']
};

export const transformCategory = (category) => {
	return {
		name: categories[category][0],
		color: categories[category][1]
	};
};
