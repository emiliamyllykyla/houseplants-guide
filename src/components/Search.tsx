import React from "react";
import { SearchProps } from "../interfaces";

const Search = ({ query, setQuery }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={query}
      />
    </form>
  );
};
export default Search;
