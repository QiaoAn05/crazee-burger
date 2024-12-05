export const deepClone = (array: []) => {
  return JSON.parse(JSON.stringify(array));
};

export const find = <T extends { id: string }>(id: string, array: T[]) => {
  return array.find((item) => item.id === id);
};

export const findIndex = <T extends { id: number }>(id: number, array: T[]) => {
  return array.findIndex((item) => item.id === id);
};

export const filter = <T extends { id: string }>(id: string, array: T[]) => {
  return array.filter((item) => item.id !== id);
};

export const isEmpty = (array: []) => {
  return array.length === 0;
};
