import { toCategory } from "../../features/route";
import { Tag, WrapperTags } from "./styled";

const Tags = () => {
  return (
    <WrapperTags>
      <Tag to={toCategory("Education")}> Education</Tag>
      <Tag to={toCategory("Business")}> Business</Tag>
      <Tag to={toCategory("Science")}> Science</Tag>
      <Tag to={toCategory("health")}> health</Tag>
      <Tag to={toCategory("sports")}> Sports</Tag>
      <Tag to={toCategory("Travel")}> Travel</Tag>
      <Tag to={toCategory("Arts")}>Arts</Tag>
      <Tag to={toCategory("Blogs")}>Blogs</Tag>
      <Tag to={toCategory("Books")}>Books</Tag>
      <Tag to={toCategory("Cars")}>Cars</Tag>
      <Tag to={toCategory("Culture")}>Culture</Tag>
      <Tag to={toCategory("Dining")}>Dining</Tag>
      <Tag to={toCategory("Fashion")}>Fashion</Tag>
      <Tag to={toCategory("Flight")}>Flight</Tag>
      <Tag to={toCategory("Health")}>Health</Tag>
      <Tag to={toCategory("Home")}>Home</Tag>
      <Tag to={toCategory("Jobs")}>Jobs</Tag>
      <Tag to={toCategory("Media")}>Media</Tag>
      <Tag to={toCategory("Movies")}>Movies</Tag>
      <Tag to={toCategory("Politics")}> Politics</Tag>
      <Tag to={toCategory("Style")}> Style</Tag>
      <Tag to={toCategory("Theater")}>Theater</Tag>
      <Tag to={toCategory("Vacation")}> Vacation</Tag>
      <Tag to={toCategory("Weather")}> Weather</Tag>
      <Tag to={toCategory("World")}> World</Tag>
    </WrapperTags>
  );
};

export default Tags;
