export const UseDelete = (array, key) => {
  return array.filter((item, akey) => akey !== key);
};

export const UseDeleteBulk = (array, objectKey) => {
  return array.filter((aitem, akey) => aitem[objectKey] === false);
};
