import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./SearchSuggestion.module.scss";

const SearchSuggestion = ({
  onClose,
  searchList,
  onClearSearchList,
  onSearchSuggestionSelection,
}) => {
  return ReactDOM.createPortal(
    <div className={classes.searchResultsContainer}>
      <div
        className={classes.close}
        onClick={onClose}
        title="close search suggestion"
      >
        <AiOutlineClose onClick={onClearSearchList} />
      </div>
      <div className={classes.recentSearchHeader}>
        <p>Recent search</p>

        <div className={classes.clearRecentSearch} title="Clear recent search">
          <AiOutlineClose onClick={onClearSearchList} />
        </div>
      </div>
      <div className={classes.searchSuggestions}>
        {searchList.map((item) => (
          <span key={item} onClick={() => onSearchSuggestionSelection(item)}>
            {item}
          </span>
        ))}
      </div>
    </div>,
    document.getElementById("searchPortal")
  );
};

export default SearchSuggestion;
