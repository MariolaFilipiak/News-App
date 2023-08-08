import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import {
  ArticleDate,
  Description,
  Image,
  Tile,
  Title,
  Box,
  MoreButton,
  GridView,
  ListView,
  List,
  InfoBoxGrid,
  InfoBoxList,
  ImageList,
  BoxList,
  BoxGrid,
  Paragraph,
} from "./styled";
import { getArticlesData } from "../../common/getArticlesData";
import Tags from "../Categories/Tags";
import Error from "../../common/StatusPage/Error/Error";
import Loading from "../../common/StatusPage/Loading/Loading";
import NoResult from "../../common/StatusPage/NoResult/NoResult";
import { searchQueryParamName } from "../../common/Navigate/SearchBar/searchParams";
import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination/Pagination";

interface ArticlesProps {
  viewMode: string;
}

const Articles: React.FC<ArticlesProps> = ({ viewMode }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get(searchQueryParamName);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, isError } = useQuery(
    ["articles", searchQuery, currentPage],
    () => getArticlesData(searchQuery || "election", currentPage)
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
      {viewMode === "grid" ? (
        <GridView>
          <Tags />
          {data?.map((article: any ) => (
            <Tile
              key={article._id}
              href={article.web_url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
              <BoxGrid>
                <InfoBoxGrid>
                  <Title>{article.headline.main}</Title>
                  <ArticleDate>
                    {new Date(article.pub_date).toLocaleDateString("pl-PL", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </ArticleDate>
                  <Description>{article.abstract}</Description>
                  <Paragraph>{article.lead_paragraph}</Paragraph>
                </InfoBoxGrid>
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
              </BoxGrid>
            </Tile>
          ))}
        </GridView>
      ) : (
        <ListView>
          <Tags />
          {data?.map((article: any) => (
            <List
              key={article._id}
              href={article.web_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.multimedia && article.multimedia.length > 0 ? (
                <ImageList
                  src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                  alt={article.headline.main}
                />
              ) : (
                <ImageList
                  src="https://t4.ftcdn.net/jpg/03/24/14/35/360_F_324143588_Jk9uwkSlhuSEyrGWkuQT7MM6mFbCayIj.jpg"
                  alt="noImage"
                />
              )}
              <BoxList>
                <InfoBoxList>
                  <Title>{article.headline.main}</Title>
                  <ArticleDate>
                    {new Date(article.pub_date).toLocaleDateString("pl-PL", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </ArticleDate>
                  <Description>{article.abstract}</Description>
                  <Paragraph>{article.lead_paragraph}</Paragraph>
                </InfoBoxList>
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
              </BoxList>
            </List>
          ))}
        </ListView>
      )}
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default Articles;
