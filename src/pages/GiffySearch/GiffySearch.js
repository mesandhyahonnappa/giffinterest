import React, { useState } from "react";
import logo from "../../images/giffintrest.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import GiffyCardContainer from "./GiffyCardContainer";

import classes from "./GiffySearch.module.scss";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const GiffySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img
            src={logo}
            alt="giffinterest"
            onClick={() => window.location.reload()}
          />
        </div>
        <SearchBar onSearch={onSearch} />
      </header>
      <main className={classes.giffySearchContainer}>
        <GiffyCardContainer searchTerm={searchTerm} />
      </main>
      <ScrollToTop />
      <footer className={classes.footer}>
        <p>
          Powered by{" "}
          <a href="www.giphy.com" target="_blank">
            www.giphy.com
          </a>
        </p>
      </footer>
    </>
  );
};

export default GiffySearch;
