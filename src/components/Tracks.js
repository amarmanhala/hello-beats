/** @jsx jsx */
import { Button, jsx, Label } from "theme-ui";
import React, { useState, useEffect } from "react";
import { Flex } from "theme-ui";
import tracks from "../tracks.json";
import Play from "./Play";
import Player from "./Player";

export default function Tracks() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [active, setActive] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);


  useEffect(() => {
    const _audio = document.createElement("audio");
    _audio.setAttribute("preload", "metadata");
    setAudio(_audio);
    return () => {
      setAudio(null);
    };
  }, []);

  const playBeat = (beat, index) => {
    setActive(index);


    audio.src = beat;

    audio.play();
    audio.onloadedmetadata = function() {
      setDuration(audio.duration)
      setButtonDisabled(false)
  };

    setIsPlaying(true);
  };
  const pause = () => {
    //audioBeat.pause();
    console.log("you paused it...");
    audio.pause();
    setIsPlaying(false);
    console.log(audio);
  };
  const play = () => {
    //audioBeat.play();
    console.log("you played it...");

    audio.play();
    setIsPlaying(true);
    console.log(audio);
  };

  return (
    <>
    <p id="demo"></p>
      <Player duration={duration}>
        {isPlaying ? (
          <Play handleClicked={pause} isPlaying={isPlaying} disabled={buttonDisabled}></Play>
        ) : (
          <Play handleClicked={play} isPlaying={isPlaying} disabled={buttonDisabled}></Play>
        )}
      </Player>
      <Flex sx={{ width: "50%", height: "100%" }}>
        <div
          sx={{
            display: "grid",
            gridGap: 2,
            width: "100%",
            paddingTop: "10em",
          }}
        >
          <ul style={{ padding: 0 }} className="tracklist">
            {tracks.map((track, index) => {
              return (
                <li
                  sx={{
                    ":hover": {
                      backgroundColor: "#0F0F0F",
                      color: "#7CBFE9",
                      cursor: "pointer",
                    },
                    ":focus": {
                      backgroundColor: "darkblue",
                      outline: "none",
                    },
                  }}
                  style={{
                    display: "Flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "20px",
                    listStyle: "none",
                    userSelect: "none",
                  }}
                  role="button"
                  tabindex="0"
                  aria-current="true"
                  id={track.id}
                  onClick={() => playBeat(track.beat, index)}
                  key={index}
                  className={active === index ? "active" : ""}
                >
                  <Label sx={{ display: "block", width: "auto" }}>
                    {track.name}
                  </Label>
                  <Label sx={{ display: "block", width: "auto" }}>
                    {track.Artist}
                  </Label>
                </li>
              );
            })}
          </ul>
        </div>
      </Flex>
    </>
  );
}
