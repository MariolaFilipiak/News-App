import { toCategory } from "../../features/route";
import { Name, Wrapper } from "./styled";

const Categories = () => {
  return (
    <Wrapper>
      <Name to={toCategory("Education")}>Education</Name>
      <Name to={toCategory("Business")}>Business</Name>
      <Name to={toCategory("World")}>World</Name>
      <Name to={toCategory("Science")}>Science</Name>
      <Name to={toCategory("health")}> Health</Name>
      <Name to={toCategory("sports")}>Sports</Name>
      <Name to={toCategory("Travel")}>Travel</Name>
    </Wrapper>
  );
};

export default Categories;
