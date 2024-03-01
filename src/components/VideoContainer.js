import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "./constant";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [Video, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const VideoData = await fetch(YOUTUBE_API);
    const JsonData = await VideoData.json();
    // console.log(JsonData.items[0]);
    setVideo(JsonData.items);
  };

  return Video.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {Video.map((item) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <VideoCard info={item} />
        </Link>
      ))}
      {/* <VideoCard info={Video[0]} /> */}
    </div>
  );
};

export default VideoContainer;
