import { useCurrentDate } from "./useCurrentDate";
import { Wrapper } from "./styled";

const formatDate = (date: Date): string =>
date.toLocaleString( "en-US" , {
weekday: "long",
hour: "2-digit",
minute: "2-digit",
second: "2-digit",
day: "numeric",
month: "long",
});

export const Clock: React.FC = () => {
const date = useCurrentDate();

return <Wrapper>Today is  {formatDate(date)}</Wrapper>;
};
