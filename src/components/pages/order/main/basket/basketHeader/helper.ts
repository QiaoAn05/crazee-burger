import { DEFAULT_SUM_TO_PAY } from "../../../../../../api/product";
import {
  BasketProductQuantity,
  MenuProduct,
} from "../../../../../../types/Product";
import { find } from "../../../../../../utils/array";
import { convertStringToBoolean } from "../../../../../../utils/string";

export const calculateSumToPay = (
  basket: BasketProductQuantity[],
  menu: MenuProduct[] | undefined
) => {
  if (menu === undefined) return DEFAULT_SUM_TO_PAY;
  return basket.reduce((total, basketProduct) => {
    const menuProduct = find(basketProduct.id, menu);

    //pas de produit trouvé
    if (menuProduct === undefined) return total;

    //on ne veut pas afficher de NaN
    if (isNaN(menuProduct.price)) return total;

    //si le produit est en rupture de stock, alors on le retire du calcul du total à payer
    if (convertStringToBoolean(menuProduct.isAvailable) === false) return total;

    const subTotal = menuProduct.price * basketProduct.quantity;

    total += subTotal;
    return total;
  }, 0);
};
