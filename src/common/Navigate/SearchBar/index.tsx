import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "../styled";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { searchQueryParamName } from "./searchParams";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const debounceDelay = 300;
  const debouncedSearchQuery = useDebounce(searchQuery, debounceDelay);

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname]);

  useEffect(() => {
    if (debouncedSearchQuery.trim() === "") {
      if (location.search !== "") {
        setSearchQuery("");
        const newPath = location.pathname.replace(/\/\d+$/, "");
        navigate(newPath);
      }
    } else {
      navigate(
        `${location.pathname}?${searchQueryParamName}=${debouncedSearchQuery}`
      );
    }
  }, [debouncedSearchQuery, location.pathname, navigate, location.search]);

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
