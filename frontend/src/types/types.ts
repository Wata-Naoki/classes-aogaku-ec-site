export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  urlData: string;
};

export type SearchFormType = {
  keyword: string;
};

//localStorageCartStateの型
export type CartType = {
  id: string;
  title: string;
  price: number;
  image: string;
}[];
