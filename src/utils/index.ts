import { useEffect, useState } from "react";

export default function cleanObject(object: object) {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (!value) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};