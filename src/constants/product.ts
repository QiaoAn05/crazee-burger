import { MenuProduct } from "../types/Product";

export const EMPTY_PRODUCT: Readonly<MenuProduct> = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  isAvailable: true,
  isPublicised: false,
});

export const DEFAULT_IMAGE = "/images/coming-soon.png";
export const IMAGE_NO_STOCK = "/images/stock-epuise.png";

export const BASKET_MESSAGE = {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
  NOT_AVAILABLE: "Non disponible",
} as const;
