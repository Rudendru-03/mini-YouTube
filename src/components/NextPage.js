import React from "react";
import WatchPage from "./WatchPage";
import ChannelDetails from "./ChannelDetails";
import ChannelDiscription from "./ChannelDiscription";
import CommentsContainer from "./Comments";
import Livechat from "./Livechat";
import SuggestionVideo from "./SuggestionVideo";

const NextPage = () => {
  return (
    <div className="grid grid-flow-col gap-0">
      <div className="grid-flow-row col-span-9 gap-y-2">
        <WatchPage className="" />
        <ChannelDetails className="" />
        <ChannelDiscription className="bg-slate-200" />
        <CommentsContainer className="" />
      </div>
      <div className="grid-flow-row col-span-3 m-2 gap-y-2 ">
        <Livechat className="row-span-4" />
        <SuggestionVideo className="row-span-8" />
      </div>
    </div>
  );
};

export default NextPage;
