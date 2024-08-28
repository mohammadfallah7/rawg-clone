import { GameQuery } from "../App";
import useData from "./useData";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

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
