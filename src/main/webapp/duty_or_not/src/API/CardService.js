import axios from 'axios';

export default class CardService {
	static async getAll(limit = 5, page = 1) {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts',
			{
				params: {
					limit,
					page
				}
			}
		);
		return response;
	}
}
