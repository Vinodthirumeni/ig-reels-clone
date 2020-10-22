import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ channel, avatarSrc, song, url, likes, shares }) {
  const [isVideoPlaying, SetisVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      SetisVideoPlaying(false);
    } else {
      videoRef.current.play();
      SetisVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        className="videoCard__player"
        src={url}
        alt="Ig reel"
        onClick={onVideoPress}
        loop
      />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
      />
    </div>
  );
}

export default VideoCard;
