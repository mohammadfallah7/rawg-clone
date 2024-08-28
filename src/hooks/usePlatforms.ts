import platforms from "../data/platforms";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => ({ data: platforms, error: null, isLoading: false });

export default usePlatforms;
