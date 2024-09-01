import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.LARGE_WEIRD);

  const handleAddToBasket = (productToAdd) => {};

  return { basket, handleAddToBasket };
};
