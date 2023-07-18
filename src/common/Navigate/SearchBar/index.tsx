import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "../styled";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { searchQueryParamName } from "./searchQueryParamName";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    new URLSearchParams(location.search).get(searchQueryParamName)
  );
  const debounceDelay = 300;
  const debouncedSearchQuery = useDebounce(searchQuery, debounceDelay);

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (debouncedSearchQuery && debouncedSearchQuery.trim() !== "") {
      searchParams.set(searchQueryParamName, debouncedSearchQuery);
    } else {
      searchParams.delete(searchQueryParamName);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  }, [debouncedSearchQuery, location.search, navigate]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  return (
    <div>
      <Bar
        type="text"
        placeholder="Search for articles"
        value={searchQuery || ""}
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchBar;
