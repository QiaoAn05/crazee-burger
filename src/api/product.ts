import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { MenuProduct } from "../types/Product";

export const syncBothMenus = (userId: string, menuUpdated: MenuProduct[]) => {
  const cachette = doc(db, "users", userId); //la cachette nécessite le nom de la base de donnée (ici db) et un path séparé par une "," pour chaque niveau du chemin

  const nourriture = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(cachette, nourriture);
};

export const getMenu = async (userId: string): Promise<MenuProduct[] | undefined> => {
  const docRef = doc(db, "users", userId); //Doc récupére un chemin

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu as MenuProduct[];
  }
};

export const DEFAULT_SUM_TO_PAY = 0;