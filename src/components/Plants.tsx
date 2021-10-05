import { ChangeEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { houseplants } from "../firebase";
import { usePromise } from "../usePromise";
import { Data } from "../types";
import { sort, filter, search } from "../functions/functions";
import PlaceholderImg from "../images/placeholder.jpg";
import Filter from "./Filter";
import Search from "./Search";
import Alert from "./Alert";
import "../plants.css";

const getHouseplants = () => houseplants.get();

function Plants() {
  const [data, setData] = useState<Data | null>(null);
  const [desc, setDesc] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [displayedData, setDisplayedData] = useState<Data | null>(null);
  const [query, setQuery] = useState<string>("");
  const snapshot = usePromise(getHouseplants, null);

  useEffect(() => {
    if (snapshot) {
      const sortedData = sort(snapshot.docs, "nameEnglish", desc);
      setData(sortedData);
      setDisplayedData(sortedData);
    }
  }, [snapshot]);

  useEffect(() => {
    if (data) {
      const filtered = filter(data, activeFilters, desc);
      const searched = query ? search(filtered, query, desc) : filtered;
      setDisplayedData(searched);
    }
  }, [activeFilters, desc, query]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setDesc(e.target.value === "descending");

  if (!displayedData) {
    return (
      <div className="page">
        <h1>All Plants</h1>Loading data...
      </div>
    );
  }

  return (
    <>
      <Alert />
      <div className="page">
        <div className="heading">
          <h1>All Plants</h1>
          <div className="options">
            <form className="sort">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort" onChange={handleChange}>
                <option value="ascending">English name: A-Z</option>
                <option value="descending">English name: Z-A</option>
              </select>
            </form>
            <Filter filters={activeFilters} setFilters={setActiveFilters} />
            <Search query={query} setQuery={setQuery} />
          </div>
        </div>
        <div className="cards">
          {displayedData.map((doc) => {
            const plant = doc.data();
            return (
              <Link key={doc.id} to={`/plants/${doc.id}`}>
                <div className="card">
                  {plant.imageURL ? (
                    <img src={plant.imageURL} />
                  ) : (
                    <img src={PlaceholderImg} alt="No image available." />
                  )}
                  <div className="card-info">
                    <h2 className="name">{plant.nameEnglish}</h2>
                    <h3 className="name scientific">{plant.nameScientific}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
          {displayedData.length === 0 && <div>No plants found.</div>}
        </div>
      </div>
    </>
  );
}

export default Plants;
