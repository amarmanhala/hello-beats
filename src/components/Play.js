import React from "react";
import { Button } from "theme-ui";
import { MdPlayArrow, MdStop } from "react-icons/md";

const Play = (props) => {
  console.log(props);
  return (
    <Button
      onClick={props.handleClicked}
      sx={{
        display: "inline-block",
        width: "5em",
        height: "5em",
        textAlign: "center",
        textDecoration: "none",
        boxShadow: "inset 0 0 0 3px",
        borderRadius: "50%",
        transition: "all .1s ease",
        color: "#E2E2E2s",
        animation: "popin .1s ease",
        backgroundColor: "transparent",
        verticalAlign: "bottom",
        outline: 'none'
      }}
    >
      {props.isPlaying ? (
        <MdStop size={50} color="#E2E2E2s"></MdStop>
      ) : (
        <MdPlayArrow size={50} color="#E2E2E2s"></MdPlayArrow>
      )}

    </Button>
  );
};
export default Play;
