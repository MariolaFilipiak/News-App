import { Weather } from "../Footer/Weather";
import SearchBar from "./SearchBar";
import { NavBar, Title, Wrapper } from "./styled";

const Navigate = () => {
  return (
    <NavBar>
      <Wrapper>
        <Title to={"/"}>News App</Title>
        <SearchBar />
        <Weather/>
      </Wrapper>
    </NavBar>
  );
};

export default Navigate;
