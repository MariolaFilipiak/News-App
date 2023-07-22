import { useEffect } from "react";
import { Button, Wrapper } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage !== 1) {
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("page", String(currentPage));
      navigate(`${location.pathname}?${queryParams.toString()}`);
    }
  }, [currentPage,location.pathname, location.search, navigate]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 100) {
      onPageChange(currentPage + 1);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <Wrapper>
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
      </Button>
      <Button onClick={handleNextPage} disabled={currentPage === 100}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      </Button>
    </Wrapper>
  );
};

export default Pagination;
