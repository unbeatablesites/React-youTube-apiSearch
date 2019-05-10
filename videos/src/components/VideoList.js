import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const RenderList = videos.map(video => {
    return <VideoItem />;
  });

  return <div>{RenderList}</div>;
};
export default VideoList;
