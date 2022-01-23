export default function cleanObject(object) {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (!value) {
      delete result[key];
    }
  });
  return result;
}
