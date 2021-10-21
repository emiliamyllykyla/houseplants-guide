import { Data } from "../types";

// Sorts data alphabetically
export const sort = (data: Data, sortBy: string, desc: boolean) => {
  const sorted = data.sort((a, b) =>
    a.data()[sortBy].toLowerCase() > b.data()[sortBy].toLowerCase() ? 1 : -1
  );
  return desc ? sorted.reverse() : sorted;
};

// Filters data based on currently active filters.
// Filter names correspond to the plant property names.
export const filter = (data: Data, activeFilters: string[], desc: boolean) => {
  const filtered = data.filter((doc) => {
    const data = doc.data();
    return activeFilters.every((a) => data[a]);
  });
  return desc ? filtered.reverse() : filtered;
};

// Searches for a match between search query and
// the english or the scientific name.
export const search = (data: Data, query: string, desc: boolean) => {
  query = query.toLowerCase();
  const results = data.filter((doc) => {
    const data = doc.data();
    const english = data.nameEnglish.toLowerCase();
    const scientific = data.nameScientific.toLowerCase();
    return english.includes(query) || scientific.includes(query);
  });
  return desc ? results.reverse() : results;
};
