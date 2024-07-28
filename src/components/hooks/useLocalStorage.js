import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  console.log(initialData);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const extistingData = JSON.parse(localStorage.getItem(key));
    if (extistingData) {
      setData(extistingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  const updatedLocalStorage = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    setData(newData);
  };
  return [data, updatedLocalStorage];
}
