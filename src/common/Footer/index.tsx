import { Weather } from "../Weather";
import { Clock } from "./Clock/Clock";
import { Wrapper } from "./styled";

const Footer = () => {
  return (
    <Wrapper>
      <Clock />
      <Weather/>
    </Wrapper>
  );
};
export default Footer;
