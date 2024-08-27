import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IGameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer: React.FC<IGameCardContainerProps> = ({ children }) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
