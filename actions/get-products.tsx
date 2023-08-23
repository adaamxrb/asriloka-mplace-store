import qs from 'query-string';

import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
	categoryid?: string;
	variantId?: string;
	sizeId?: string;
	isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
	const url = qs.stringifyUrl({
		url: URL,
		query: {
			variantId: query.variantId,
			sizeId: query.sizeId,
			categoryId: query.categoryid,
			isFeatured: query.isFeatured,
		},
	});

	const res = await fetch(URL);
	return res.json();
};

export default getProducts;
