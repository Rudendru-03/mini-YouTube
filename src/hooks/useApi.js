import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../components/constant";

export const useAPI = () => {
  const [Video, setVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const VideoData = await fetch(YOUTUBE_API);
    const JsonData = await VideoData.json();
    setVideo(JsonData.items);
  };
  return Video;
};
