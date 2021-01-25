/** @jsx jsx */
import { Button, jsx, Label } from "theme-ui";
import React, { useEffect, useState } from "react";
import { Flex, Progress } from "theme-ui";

export default function Player(props) {
  return (
    <div style={{ position: "fixed", width: "100%", top: 50, zIndex: 1000 }}>
      <Flex
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          pt: 2,
          backgroundColor: "#030506",
        }}
      >
        <div style={{ margin: "0 auto" }}>{props.children}</div>
      </Flex>
    </div>
  );
}
