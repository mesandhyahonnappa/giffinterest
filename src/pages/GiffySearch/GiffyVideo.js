import { useRef, useState } from "react";
import classes from "./GiffyVideo.module.scss";

const GifVideo = ({ image, title = "" }) => {
  const [play, setPlay] = useState(true);
  const videoRef = useRef(null);
  const togglePlay = () => {
    const video = videoRef.current;
    setPlay(() => !play);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div
      onClick={togglePlay}
      className={classes.videoWrapper}
      style={{
        height: `${image.height > 80 ? image.height : 80}px`,
        width: "100%",
      }}
    >
      {play && (
        <div className={classes.playButton}>
          <div className={classes.arrow}></div>
          <div className={classes.circle}></div>
        </div>
      )}
      <video
        ref={videoRef}
        className={classes.video}
        loop
        style={{
          height: `${image.height > 80 ? image.height : 80}px`,
        }}
      >
        <source src={image.mp4} type="video/mp4" />
      </video>
    </div>
  );
};

export default GifVideo;
