import { useState } from "react";

export function useFilter(dataList, callback) {
  // console.log(callback);
  const [query, setQuery] = useState("");
  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );
  return [filteredData, setQuery];
}
