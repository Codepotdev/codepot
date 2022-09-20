export function addLanguagesTolanguageFilterData(data) {
  const languageFilterData = [{ name: "All", key: "all" }];
  data.forEach((cd, index) => {
    /**
     * To avoid having duplactes in the array we have to
     * Check if the language is already in the filtered list
     * index must be different from 0 since the array is empty at start
     */
    if (
      !languageFilterData.filter(
        (e) => e.name.toLowerCase() === cd.language.toLowerCase()
      ).length > 0 &&
      index !== 0
    ) {
      languageFilterData.push({
        name: cd.language,
        key: cd.language,
      });
    }
  });
  return languageFilterData;
}
