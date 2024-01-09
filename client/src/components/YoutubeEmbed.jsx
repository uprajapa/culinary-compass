import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const YoutubeEmbed = ({ url }) => {
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    extractVideoId();
  }, []);

  const extractVideoId = () => {
    const urlObject = new URL(url);
    const searchParams = new URLSearchParams(urlObject.search);
    setVideoId(searchParams.get("v"));
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  return (
    <YouTube videoId={videoId} options={options} onReady={onReady} id="video" />
  );
};

export default YoutubeEmbed;
