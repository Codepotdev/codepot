export function addLanguagesTolanguageFilterData(data) {
  const filters = [{ name: "All", key: "all" }];
  data.forEach((cd, index) => {
    /**
     * To avoid having duplactes in the array we have to
     * Check if the language is already in the filtered list
     * index must be different from 0 since the array is empty at start
     */
    if (
      !filters.filter((e) => e.name.toLowerCase() === cd.language.toLowerCase())
        .length > 0 &&
      index !== 0
    ) {
      filters.push({
        name: cd.language,
        id: cd.language,
      });
    }
  });
  return filters;
}
