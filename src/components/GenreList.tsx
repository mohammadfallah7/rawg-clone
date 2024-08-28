import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface IGenreListProps {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList: React.FC<IGenreListProps> = ({
  selectedGenre,
  onSelectGenre,
}) => {
  const { data, error, isLoading } = useGenres();

  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (isLoading)
    return genres.map((genre) => <SkeletonText my={5} key={genre} />);

  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} py="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
            />
            <Button
              fontSize={selectedGenre?.id === genre.id ? "lg" : "md"}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
