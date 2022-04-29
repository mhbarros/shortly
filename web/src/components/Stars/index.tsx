import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

import "./stars.css";

function Stars() {
  const stars = useRef<HTMLDivElement>(null);
  const stars2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stars.current || !stars2.current) return;

    stars.current.style.boxShadow = generateStarBoxShadow(250);
    stars2.current.style.boxShadow = generateStarBoxShadow(250);
  }, [stars, stars2]);

  const generateStarBoxShadow = (amountOfStars: number): string => {
    let boxShadow = "";

    for (let i = 0; i <= amountOfStars; i++) {
      const x = Math.floor(Math.random() * window.screen.width);
      const y = Math.floor(Math.random() * window.screen.height);

      boxShadow += `${x}px ${y}px,`;
    }

    return boxShadow.slice(0, -1);
  };

  return (
    <>
      <Box
        className={"blink-1"}
        ref={stars}
        w={"4px"}
        h={"4px"}
        borderRadius={"50%"}
        color={"white"}
      />
      <Box
        ref={stars2}
        w={"1px"}
        h={"1px"}
        borderRadius={"50%"}
        color={"white"}
      />
    </>
  );
}

export default Stars;
