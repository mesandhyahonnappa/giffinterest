import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { useScrollVisible, scrollToTop } from "../../hooks/useScrollVisible";
import classes from "./ScrollToTop.module.scss";

const ScrollToTop = ({ topOffset = 10 }) => {
  const scrollVisible = useScrollVisible(80);

  return (
    <div>
      {scrollVisible && (
        <BsArrowUpShort onClick={scrollToTop} className={classes.scrollUp} />
      )}
    </div>
  );
};

export default ScrollToTop;
