import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Date,
  Description,
  Image,
  Section,
  Tile,
  Title,
} from "./styled";
import axios from "axios";
import { useState } from "react";
import Country from "./Country";

const fetchData = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=b67dd6612fc44245aeb6075c1b58e98f`
  );
  return response.data;
};

const Articles = () => {
  const [limit, setLimit] = useState(10);
  const { data, isLoading, isError } = useQuery(["articles"], fetchData);

  const articles = data?.articles || [];

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <>
      <Section>
        <Country />
        {articles.slice(0, limit).map((article: any) => (
          <Tile key={article.id}>
            <Title>{article.title}</Title>
            <Date>{article.publishedAt}</Date>
            <Image src={article.urlToImage} alt={article.title} />
            <Description>{article.description}</Description>
          </Tile>
        ))}
      </Section>
      {limit < articles.length && (
        <>
          <Button onClick={handleShowMore}>More + </Button>
        </>
      )}
    </>
  );
};

export default Articles;
