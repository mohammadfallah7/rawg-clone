import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface INavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar: React.FC<INavBarProps> = ({ onSearch }) => {
  return (
    <HStack p="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSubmit={(value) => onSearch(value)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
