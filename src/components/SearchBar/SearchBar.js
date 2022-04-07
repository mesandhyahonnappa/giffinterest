import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import classes from "./SearchBar.module.scss";
import SearchSuggestion from "./SearchSuggestion";

const SearchBar = ({ onSearch }) => {
  const [showSearchList, setShowSearchList] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [recentSearchList, setRecentSearchList] = useState([]);

  const onSearchEntered = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      let curSearchList = [...recentSearchList];
      if (
        curSearchList.indexOf(event.target.value) < 0 &&
        event.target.value.length > 0
      ) {
        setRecentSearchList([...curSearchList, event.target.value]);
      }
      onSearch(event.target.value);
    }
  };

  const onRecentSearchSelected = (item) => {
    debugger;
    console.log(item);
    setShowSearchList(false);
    setSearchText(item);
    onSearch(item);
  };

  const onSearchCleared = () => {
    setSearchText("");
    onSearch("");
  };

  return (
    <>
      <div className={classes.searchInputWrapper}>
        <input
          className={classes.searchInput}
          type="text"
          placeholder="Search"
          value={searchText}
          // onBlur={onSearchFocusOut}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value.length === 0) {
              setShowSearchList(true);
            } else {
              setShowSearchList(false);
            }
          }}
          onKeyUp={onSearchEntered}
        ></input>
        {showSearchList && recentSearchList.length > 0 && (
          <div className={classes.searchResults}>
            <SearchSuggestion
              onClose={() => setShowSearchList(false)}
              searchList={recentSearchList}
              onClearSearchList={() => setRecentSearchList([])}
              onSearchSuggestionSelection={(item) =>
                onRecentSearchSelected(item)
              }
            />
          </div>
        )}
        {searchText.length > 0 && (
          <AiOutlineClose onClick={onSearchCleared} className={classes.icon} />
        )}
        {searchText.length === 0 && (
          <AiOutlineSearch className={classes.icon} />
        )}
      </div>
    </>
  );
};

export default SearchBar;
