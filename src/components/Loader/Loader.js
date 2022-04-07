import React from "react";
import loadingGif from "../../images/loader.gif";
import classes from "./Loader.module.scss";

const Loader = () => {
  return <img className={classes.loader} src={loadingGif} alt="loading"></img>;
};

export default Loader;
