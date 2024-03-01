import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  sports,
  learning,
  setting,
  channel,
  home,
  shorts,
  suscribe,
  history,
  your_video,
  watch_later,
  trending,
  music,
  movie,
  shopping,
  live,
  game,
  podcast,
  studio,
  kid,
  news,
  report,
  help,
  feedback,
  premium,
  music_icon,
} from "./constant";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="">
      <ul className="">
        <Link to="/">
          <li className="p-2 m-1 flex">
            <img className="h-6 w-6 rounded-full bg-white" src={home} />
            <p className="text-md mx-2">Home</p>
          </li>
        </Link>
        <Link to="/demo">
          <li className="p-2 m-1 flex">
            {/* <img className="h-6 w-6 rounded-full bg-white" src={home} /> */}
            <p className="text-md mx-2">Demo</p>
          </li>
        </Link>
        <li className="p-1 m-1 flex">
          <img className="h-6 w-6" src={shorts} alt="shorts-icon" />
          <p className="text-md mx-2">Shorts</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-6" src={suscribe} alt="suscription-icon" />
          <p className="text-md mx-2">Suscriptions</p>
        </li>
      </ul>
      <ul>
        <h1 className="font-bold text-lg leading-6 p-4 ">YOU</h1>
        <li className="p-1 m-1 flex">
          <img className="h-6 w-6" src={channel} alt="your-channel-icon" />
          <p className="text-md mx-2">Your Channel</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={history} alt="history-icon" />
          <p className="text-md mx-2">History</p>
        </li>
        <li className="p-1 m-1 flex">
          <img
            className="h-5 w-5 rounded-lg"
            src={your_video}
            alt="your-videos-icon"
          />
          <p className="text-md mx-2">Your Videos</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={watch_later} alt="watch-later-icon" />
          <p className="text-md mx-2">Watch Later</p>
        </li>
        <li>Show More</li>
      </ul>
      <ul>
        <h1 className="font-bold text-xl">Explore</h1>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={trending} alt="trending-icon" />
          <p className="text-md mx-2">Trending</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-4" src={shopping} alt="shoppping-icon" />
          <p className="text-md mx-2">Shopping</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={music} alt="music-icon" />
          <p className="text-md mx-2">Music</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-6 w-6" src={movie} alt="movie-icon" />
          <p className="text-md mx-2">Movie</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5 rounded-xl" src={live} alt="live-icon" />
          <p className="text-md mx-2">Live</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-6 w-6" src={game} alt="gaming-icon" />
          <p className="text-md mx-2">Gaming</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-6 w-6" src={news} alt="news-icon" />
          <p className="text-md mx-2"> News</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-6 w-6" src={sports} alt="sports-icon" />
          <p className="text-md mx-2">Sports</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-6 w-6 rounded-xl" src={learning} alt="icon" />
          <p className="text-md mx-2">Learning</p>
        </li>
        <li className="p-1 m-1 flex">
          <img
            className="h-5 w-5"
            src="https://cfda.imgix.net/2020/08/YouTube.jpg"
            alt="icon"
          />
          <p className="text-md mx-2">Fashion & Beauty</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5 rounded-xl" src={podcast} alt="icon" />
          <p className="text-md mx-2">Podcast</p>
        </li>
      </ul>
      <ul>
        <h1 className="font-bold text-xl">More From YouTube</h1>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={premium} alt="premium-icon" />
          <p className="text-md mx-2">YouTube Premium</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-7 w-6" src={studio} alt="studio-icon" />
          <p className="text-md mx-2">YouTube Studio</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={music_icon} alt="music-icon" />
          <p className="text-md mx-2">YouTube Music</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-6 w-6" src={kid} alt="kids-icon" />
          <p className="text-md mx-2">YouTube Kids</p>
        </li>
      </ul>
      <ul>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={setting} alt="setting-icon" />
          <p className="text-md mx-2">Setting</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={report} alt="report-icon" />
          <p className="text-md mx-2">Report History</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={help} alt="help-icon" />
          <p className="text-md mx-2">Help</p>
        </li>
        <li className="p-1 m-1 flex">
          <img className="h-5 w-5" src={feedback} alt="feedback-icon" />
          <p className="text-md mx-2">Send Feedback</p>
        </li>
      </ul>
      {/* <ul>
        <p className="flex flex-wrap">
          AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
        </p>
        <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
      </ul>
      <ul>
        <p>© 2024 Google LLC</p>
      </ul> */}
    </div>
  );
};

export default SideBar;
