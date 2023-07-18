import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import {
  ArticleDate,
  Description,
  Image,
  Section,
  Tile,
  Title,
  InfoBox,
  Box,
  MoreButton,
} from "./styled";
import { getArticlesData } from "../../common/getArticlesData";
import Tags from "../../common/Categories/Tags";
import Error from "../../common/StatusPage/Error/Error";
import Loading from "../../common/StatusPage/Loading/Loading";
import NoResult from "../../common/StatusPage/NoResult/NoResult";
import { searchQueryParamName } from "../../common/Navigate/SearchBar/searchParams";

const Articles = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get(searchQueryParamName);

  const { data, isLoading, isError } = useQuery(["articles", searchQuery], () =>
    getArticlesData(searchQuery || "election")
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  if (data.length === 0) {
    return <NoResult />;
  }

  return (
    <>
      <Section>
        <Tags />
        {data?.map((article: any) => (
          <Tile key={article._id}>
            {article.multimedia && article.multimedia.length > 0 ? (
              <Image
                src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                alt={article.headline.main}
              />
            ) : (
              <Image
                src="https://t4.ftcdn.net/jpg/03/24/14/35/360_F_324143588_Jk9uwkSlhuSEyrGWkuQT7MM6mFbCayIj.jpg"
                alt="noImage"
              />
            )}
            <InfoBox>
              <Title>{article.headline.main}</Title>
              <ArticleDate>
                {new Date(article.pub_date).toLocaleDateString("pl-PL", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </ArticleDate>
              <Description>{article.abstract}</Description>
            </InfoBox>
            <Box>
              <MoreButton
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ad615ac1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </MoreButton>
            </Box>
          </Tile>
        ))}
      </Section>
    </>
  );
};

export default Articles;
