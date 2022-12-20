import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../atom/atom";

export const useCheckout = () => {
  const cartProducts = useRecoilValue(cartState);
  const handleCheckout = async () => {
    const response = await fetch("http://localhost:8080/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // items: [{ id: cartProducts.id, quantity: 1 }],
        items: cartProducts
          .filter((item: any) => item.price > 0)
          .map((product) => ({
            id: product.id,
            quantity: 1,
          })),
      }),
    });
    const session = await response.json();
    if (session.url) {
      window.location.assign(session.url);
    }
  };
  return { handleCheckout };
};
