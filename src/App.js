import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {videos.map((vid) => (
          <VideoCard
            channel={vid.channel}
            avatarSrc={vid.avatarSrc}
            song={vid.song}
            url={vid.url}
            likes={vid.likes}
            shares={vid.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
