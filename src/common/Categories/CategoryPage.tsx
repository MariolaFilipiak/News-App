import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Country from "../../features/Articles/Country/Country";
import {
  Button,
  Date,
  Description,
  Image,
  Section,
  Tile,
  Title,
} from "../../features/Articles/styled";
import { getCategory } from "../getData";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [limit, setLimit] = useState(10);
  const { data, isLoading, isError } = useQuery(["articles", category], () =>
    getCategory(category || "")
  );

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
            {article.urlToImage ? (
              <Image src={article.urlToImage} alt={article.title} />
            ) : (
              <Image
                src="https://t4.ftcdn.net/jpg/03/24/14/35/360_F_324143588_Jk9uwkSlhuSEyrGWkuQT7MM6mFbCayIj.jpg"
                alt="noImage"
              />
            )}
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

export default CategoryPage;