import React from "react";
export const useScrollVisible = ({ topOffset = 10 }) => {
  const [scrollVisible, setScrollVisible] = React.useState(false);

  const onScrolled = () => {
    setScrollVisible(document.documentElement.scrollTop > topOffset);
    // 80 - as fixed header height
  };

  React.useEffect(() => {
    document.addEventListener("scroll", onScrolled);
    return () => document.removeEventListener("scroll", onScrolled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scrollVisible;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export const scrollToBottom = () => {
  window.scrollTo({
    bottom: 0,
    behavior: "smooth",
  });
};
