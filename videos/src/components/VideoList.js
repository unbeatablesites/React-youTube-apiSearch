import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const RenderList = videos.map(video => {
    return <VideoItem onVideoSelect="onVideoSelect" video={video} />;
  });

  return <div className="ui relaxed divided list">{RenderList}</div>;
};
export default VideoList;
