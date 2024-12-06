export const deepClone = <T>(array: T[]): T[] => {
  return JSON.parse(JSON.stringify(array));
};

type ID = string | number

export const find = <T extends { id: ID }>(id: ID, array: T[]) => {
  return array.find((item) => item.id === id);
};

export const findIndex = <T extends { id: ID }>(id: ID, array: T[]): number => {
  return array.findIndex((item) => item.id === id);
};

export const filter = <T extends { id: string }>(id: string, array: T[]) => {
  return array.filter((item) => item.id !== id);
};

export const isEmpty = (array: []) => {
  return array.length === 0;
};
