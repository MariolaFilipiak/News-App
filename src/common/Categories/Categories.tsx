import { toCategory } from "../../features/route";
import { Name, Wrapper } from "./styled";

const Categories = () => {
  return (
    <Wrapper>
      <Name to={toCategory("business")}>Business</Name>
      <Name to={toCategory("entertainment")}>Entertainment</Name>
      <Name to={toCategory("general")}>General</Name>
      <Name to={toCategory("science")}>Science</Name>
      <Name to={toCategory("health")}> Health</Name>
      <Name to={toCategory("sports")}>Sports</Name>
      <Name to={toCategory("technology")}>Technology</Name>
    </Wrapper>
  );
};

export default Categories;
