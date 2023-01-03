import { Product } from '../types/types';
import { useLocalStorage } from './useLocalStorage';

export const useCheckout = () => {
  // const cartProducts = useRecoilValue(cartState);
  const { value, removeValue, setValue } = useLocalStorage();

  const handleCheckout = async () => {
    // 'http://localhost:8080/checkout'は、ローカル用のURL
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // items: [{ id: cartProducts.id, quantity: 1 }],
        items: value
          .filter((item: Product) => item.price > 0)
          .map((product: Product) => ({
            id: product.id,
            quantity: 1,
          })),
      }),
    });
    const session = await response.json();
    setValue(value.map((item: any) => (item.state ? item : { ...item, state: true })));

    if (session.url) {
      window.location.assign(session.url);
    }
  };
  return { handleCheckout };
};
