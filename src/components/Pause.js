import React from "react";
import { Button } from "theme-ui";

const Pause = ({ handleClicked }) => {
  return (
    <Button
      onClick={handleClicked}
      sx={{ borderRadius: "50%", backgroundColor: "RED", color: "#fff" }}
      
    >
      Pause
    </Button>
  );
};
export default Pause;
