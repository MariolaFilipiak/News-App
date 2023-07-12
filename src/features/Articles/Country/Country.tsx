import { toCountry } from "../../route";
import { Tag, Wrapper } from "./styled";

const Country = () => {
  return (
    <Wrapper>
      <Tag to={toCountry("pl")}>Poland</Tag>
      <Tag to={toCountry("gr")}>Greece</Tag>
      <Tag to={toCountry("us")}>US</Tag>
      <Tag to={toCountry("br")}>Brazil</Tag>
      <Tag to={toCountry("ar")}>Argentina</Tag>
      <Tag to={toCountry("bg")}>Bulgaria</Tag>
      <Tag to={toCountry("at")}>Austria</Tag>
      <Tag to={toCountry("es")}>Spain</Tag>
      <Tag to={toCountry("it")}>Italy</Tag>
      <Tag to={toCountry("jp")}>Japan</Tag>
      <Tag to={toCountry("ua")}>Ukraine</Tag>
      <Tag to={toCountry("sk")}>Slovakia</Tag>
      <Tag to={toCountry("fr")}>France</Tag>
      <Tag to={toCountry("gb")}> England</Tag>
      <Tag to={toCountry("il")}> Izrael</Tag>
      <Tag to={toCountry("de")}> Germany</Tag>
      <Tag to={toCountry("be")}> Belgium</Tag>
      <Tag to={toCountry("no")}> Norway</Tag>
      <Tag to={toCountry("tr")}> Turkey</Tag>
    </Wrapper>
  );
};

export default Country;
