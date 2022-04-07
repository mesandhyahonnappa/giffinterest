import React, { useState, useEffect, useRef } from "react";
import GiffyCard from "./GiffyCard";
import Masonry from "react-masonry-css";
import classes from "./GiffyCardContainer.module.scss";
import { fetchGiffies } from "../../utils/fetchGiffies";
import { useAsync } from "../../hooks/useGiffies";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Loader from "../../components/Loader/Loader";
import { useScrollVisible } from "../../hooks/useScrollVisible";

const GiffyCardContainer = ({ searchTerm }) => {
  const scrollVisible = useScrollVisible(10);
  const [giffyType, setGiffyType] = useState("GIF");
  const [searchText, setSearchText] = useState(searchTerm);
  const loadMore = useRef();
  const [pageCount, setPageCount] = useState(0);

  const { data: giffies, error, run } = useAsync();

  useEffect(() => {
    setPageCount(0);
    setSearchText(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    run(
      fetchGiffies(searchText, pageCount, 15),
      pageCount === 0 ? "LOAD" : "APPEND"
    );
  }, [searchText, pageCount, run]);

  const getMore = () => {
    setPageCount((prevPageCount) => prevPageCount + 15);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (searchText.length > 0) {
            getMore();
          }
        }
      },
      { threshold: 1 }
    );
    observer.observe(loadMore.current);
  }, [searchText]);

  const getGiffies = () => {
    return giffies.map((giffy, index) => (
      <GiffyCard
        type={giffyType}
        key={giffy.id}
        giffy={giffy}
        xOffset={0}
        yOffset={0}
      />
    ));
  };

  if (error) {
    return (
      <div role="alert">
        <pre style={{ color: "red" }}>Error: {error.message}</pre>
      </div>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.filter}>
          <span
            onClick={() => setGiffyType("GIF")}
            className={giffyType === "GIF" ? classes.active : ""}
          >
            Gifs
          </span>
          <span
            onClick={() => setGiffyType("VIDEO")}
            className={giffyType === "VIDEO" ? classes.active : ""}
          >
            Video
          </span>
        </div>
        {searchTerm.length === 0 && (
          <div className={classes.info}>
            <p>Mood to search for cool Gifs?</p>
          </div>
        )}
        <h2 className={classes.searchText}>{searchText}</h2>
        <Masonry
          breakpointCols={{ default: 5, 1200: 4, 700: 2, 500: 2 }}
          className={classes.grid}
          columnClassName={classes.girdColumn}
        >
          {giffies.length > 0 && getGiffies()}
        </Masonry>
      </div>
      <div className={classes.loader} ref={loadMore}>
        {scrollVisible && <Loader />}
      </div>
    </>
  );
};

export default GiffyCardContainer;
