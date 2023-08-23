export interface Billboard {
	id: string;
	label: string;
	imageUrl: string;
}

export interface Category {
	id: string;
	name: string;
	billboards: Billboard;
}

export interface Product {
	id: string;
	category: Category;
	name: string;
	price: string;
	isFeatiured: boolean;
	size: Size;
	variant: Variant;
	images: Image[];
}

export interface Image {
	id: string;
	url: string;
}

export interface Size {
	id: string;
	name: string;
	value: string;
}

export interface Variant {
	id: string;
	name: string;
	value: string;
}
