import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

const useGames = ({ genre, platform }: GameQuery) =>
  useData<Game>(
    "/games",
    { params: { genres: genre?.id, platforms: platform?.id } },
    [genre?.id, platform?.id]
  );

export default useGames;
