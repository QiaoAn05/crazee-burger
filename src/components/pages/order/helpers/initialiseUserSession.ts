import { getMenu } from "../../../../api/product";
import { BasketProductQuantity, MenuProduct } from "../../../../types/Product";
import { getLocalStorage } from "../../../../utils/window";

const initialiseMenu = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>
) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};
const initialiseBasket = (
  username: string,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>
) => {
  const basketReceived = getLocalStorage(username);
  if (basketReceived) setBasket(basketReceived as BasketProductQuantity[]);
};

export const initialiseUserSession = async (
  username: string,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>,
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>
) => {
  await initialiseMenu(username, setMenu);
  initialiseBasket(username, setBasket);
};
