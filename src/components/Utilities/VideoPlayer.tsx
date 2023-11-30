"use client";

import { useState } from "react";
import YouTube from "react-youtube";
import { PiX } from "react-icons/pi";

const Player = ({
  youtubeId,
  visible,
  handleVideoPlayer,
}: {
  youtubeId: string;
  visible: boolean;
  handleVideoPlayer: () => void;
}) => {
  return (
    <div
      className={`flex flex-col fixed bottom-4 right-4 gap-2 justify-end items-end transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="text-color-primary rounded-full bg-color-secondary p-1"
        onClick={handleVideoPlayer}
      >
        <PiX size={24} />
      </button>
      <YouTube
        videoId={youtubeId}
        onReady={(event) => event?.target?.pauseVideo?.()}
        opts={{
          width: "300",
          height: "250",
        }}
        onError={() => alert("Video is broken, please try another")}
      />
    </div>
  );
};

const ButtonOpenPlayer = ({
  visible,
  handleVideoPlayer,
}: {
  visible: boolean;
  handleVideoPlayer: () => void;
}) => {
  return (
    <button
      className={`fixed bottom-4 right-4 text-color-dark rounded-xl bg-color-primary py-2 px-6 text-xl shadow-2xl hover:bg-color-accent transition-all duration-300 ease-in-out ${
        visible ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleVideoPlayer}
    >
      Tonton Trailer
    </button>
  );
};

export default function VideoPlayer({
  youtubeId,
}: Readonly<{ youtubeId: string }>) {
  const [visible, setVisible] = useState(true);

  const handleVideoPlayer = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <Player
        youtubeId={youtubeId}
        visible={visible}
        handleVideoPlayer={handleVideoPlayer}
      />
      <ButtonOpenPlayer
        visible={visible}
        handleVideoPlayer={handleVideoPlayer}
      />
    </>
  );
}
