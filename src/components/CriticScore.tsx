import { Badge } from "@chakra-ui/react";

interface ICriticScoreProps {
  score: number;
}

const CriticScore: React.FC<ICriticScoreProps> = ({ score }) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge px={2} fontSize="14px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
