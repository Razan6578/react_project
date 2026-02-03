export type Book = {
  id: number;
  image: string;
  categoryId: number;
  title: string;
  authorId: number;
  shortDescription: string;
  description: string;
  price: number;
  discountPrice: number;
  pageCount: number;
  status: bookStatus;
  createdAt: string;
  updatedAt: string;
}

type bookStatus =  'AVAILABLE' | 'OUT_OF_STOCK' | 'DISCONTINUED';
