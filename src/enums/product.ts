type ProductType = {
  id: string,
  title: string,
  imageSource: string,
  price: number,
  isAvailable: boolean,
  isPublicised: boolean,
}

export const EMPTY_PRODUCT = <ProductType> Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  isAvailable: true,
  isPublicised: false,
});

export const DEFAULT_IMAGE: string = "/images/coming-soon.png";
export const IMAGE_NO_STOCK: string = "/images/stock-epuise.png";

type BasketMessageType = {
  EMPTY: string,
  LOADING: string,
  NOT_AVAILABLE: string,
}

export const BASKET_MESSAGE = <BasketMessageType> {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
  NOT_AVAILABLE: "Non disponible",
};
