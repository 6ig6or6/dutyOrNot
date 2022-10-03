import axios from 'axios';
import { transformCategoryBackwards } from '../utils/transformCategory';

export default class CardService {
	static async getAll(
		limit = 5,
		page = 1,
		title = '',
		comment = '',
		paragraph = '',
		category = '',
		caseAfter = ''
	) {
		const queryParamsList = [
			'pageSize',
			'pageNumber',
			'title',
			'comment',
			'paragraph',
			'category',
			'caseAfter'
		];
		const queryParams = {};
		[...arguments].forEach((el, ind) => {
			if (el) {
				queryParams[queryParamsList[ind]] = el;
			}
		});
		if (category) {
			queryParams['category'] = transformCategoryBackwards(category);
		}
		const response = await axios.get(
			'http://localhost:8081/api/v1/cases/',
			{
				params: {
					...queryParams
				}
			}
		);
		return response;
	}
}
