export type Product<TPicture> = {
  id: string;
  code: string;
  title: string;
  description: string;
  pictures: TPicture[];
  price: number;
  category: string;
  createdOn: string;
  updatedOn: string;
  deleted: string[];
}

export type ProductOrder = {
  id: string;
  code: string;
  title: string;
  pictures: string[];
  price: number;
  category: string;
  quantity: number;
  discount: number;
}

export type ProductItem = {
  id: string;
  code: string;
  title: string;
  discount: number;
  pictures: string[];
  price: number;
  category: string;
  favoriteScore: number;
  favoriteCount: number;
}

export type DetailProduct = {
  id: string;
  code: string;
  title: string;
  description: string;
  discount: number;
  pictures: string[];
  price: number;
  category: string;
  favoriteScore: number;
  favoriteCount: number;
}
