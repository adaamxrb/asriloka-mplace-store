import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';

import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';

export const revalidate = 0;

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard(
		'5011325c-155d-4e7c-9963-6d67c19a1856'
	);

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboard} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Produk Unggulan" items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
