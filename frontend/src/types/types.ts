export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  urlData: string;
};

/* export interface CartItem {
    id?: number | undefined
    title?: string | undefined
    price?: number | undefined
    quantity: number
    cost?: number | undefined
  } */

export type SearchFormType = {
  keyword: string;
};
