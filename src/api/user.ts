import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import { User } from "../types/User";

export const getUser = async (userId: string): Promise<User | undefined> => {
  const docRef = doc(db, "users", userId); //Doc récupére un chemin

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived as User;
  }
};

export const createUser = (userId: string) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.SMALL,
  };

  setDoc(docRef, newDoc);
};

export const authenticateUser = async (userId: string): Promise<User | undefined> => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    createUser(userId);
  }
  return existingUser
};
