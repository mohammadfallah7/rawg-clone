import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import React from "react";

interface IGameHeadingProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameHeading: React.FC<IGameHeadingProps> = ({
  selectedGenre,
  selectedPlatform,
}) => {
  const text = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading as={"h1"} my={5} fontSize="5xl">
      {text}
    </Heading>
  );
};

export default GameHeading;
