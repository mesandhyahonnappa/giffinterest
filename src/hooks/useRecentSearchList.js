import { useState } from "react";
export const useRecentSearchList = () => {
  const [searchList, setSearchList] = useState([]);

  const clearSearchList = () => {
    setSearchList([]);
  };

  return [searchList, setSearchList, clearSearchList];
};
