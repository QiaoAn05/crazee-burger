import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menuUpdated) => {
  const cachette = doc(db, "users", userId); //la cachette nécessite le nom de la base de donnée (ici db) et un path séparé par une "," pour chaque niveau du chemin

  const nourriture = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(cachette, nourriture);
};
