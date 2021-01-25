import * as React from "react";
import '../components/global.css';
import { Flex } from "theme-ui";
import Header from "../components/Header";
import Player from "../components/Player";
import Tracks from "../components/Tracks";

const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <Flex sx={{ flexDirection: "column", justifyContent: 'center', width: "100vw", height: "8em", justifyItems: 'center', alignItems: 'center' }}>
        <Tracks></Tracks>
      </Flex>
    </main>
  );
};

export default IndexPage;
