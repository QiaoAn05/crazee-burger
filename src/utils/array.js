export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const find = (id, array) => {
  return array.find((item) => item.id === id);
};

export const findIndex = (id, array) => {
  return array.findIndex((item) => item.id === id);
};

export const filter = (id, array) => {
  return array.filter((item) => item.id !== id);
};
