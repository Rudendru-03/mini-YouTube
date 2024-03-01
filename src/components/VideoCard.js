import React, { useEffect } from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  // console.log(info);
  return (
    <div className="p-2 m-3 w-72 shadow-2xl h-72 rounded-xl">
      <img
        className="rounded-xl"
        src={thumbnails.medium.url}
        alt="thumnail-icon"
      />
      <ul>
        <li>{title}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
