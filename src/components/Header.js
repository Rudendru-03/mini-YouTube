import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { cacheResults } from "../utils/SearchSlice";
import { YOUTUBE_SUGGESTION_API, profile_icon } from "./constant";
import { notification } from "./constant";
import { useAPI } from "../hooks/useApi";

const Header = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  const [Suggestion, setSuggestion] = useState([]);
  const [ShowSuggestion, setShowSuggestion] = useState(false);
  const [FilterVideos, setFilterVideos] = useState();
  const [SelectItem, setSelectItem] = useState("");
  const [inputBox, setInputBox] = useState("");

  const handleSelectItem = (item) => {
    setSelectItem(item);
    setInputBox(item);
  };

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[SearchQuery]) {
        setSuggestion(searchCache[SearchQuery]);
      } else {
        Get_Suggestion_Api();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [SearchQuery]);

  const Get_Suggestion_Api = async () => {
    const SuggestionApi = await fetch(YOUTUBE_SUGGESTION_API + SearchQuery);
    const SuggestionApiData = await SuggestionApi.json();
    setSuggestion(SuggestionApiData[1]);
    // console.log(SuggestionApiData[1]);

    // update cache
    dispatch(
      cacheResults({
        [SearchQuery]: SuggestionApiData[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col border-gray-500 shadow-2xl h-20">
      <div className="flex col-span-2 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="w-14 h-11 p-2 pt-3 mt-4 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="hemberg-ion"
        />
        <a href="/">
          <img
            className="w-36 h-20 p-2"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="youtube-ion"
          />
        </a>
      </div>
      <div className="flex col-span-8 p-2 ">
        <input
          className="w-[40rem] h-11 my-3 border-solid border-black border-2 rounded-l-full text px-5"
          type="text"
          value={SearchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="h-11 my-3 border-solid border-black border-2 rounded-r-full">
          <img
            className="w-10 h-10 p-3 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_U-XjzHHDGHeLM1HhMGTHbXV__ONb3BiEDVuGSNO36GX1iWSoRqh8FQrDZWVJlmKKOTs&usqp=CAU"
            alt="search-btn"
          />
        </button>
        {ShowSuggestion && (
          <div className="absolute bg-white py-2 mt-14 px-2 w-[40rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {Suggestion.map((item) => (
                <li
                  key={item}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                  onClick={(item) => handleSelectItem(item)}
                >
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex col-span-2 p-2 m-4">
        <img
          className="w-11 h-10 p-1"
          src="https://cdn.icon-icons.com/icons2/3237/PNG/512/social_media_chatting_tool_add_video_icon_197449.png"
          alt="create-icon"
        />
        <img
          className="w-11 h-10 p-1"
          src={notification}
          alt="notification-icon"
        />
        <img className="w-11 h-10 p-1" src={profile_icon} alt="profile-icon" />
      </div>
    </div>
  );
};

export default Header;
