import devicon from "@data/devicon.json";

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

export function getImageSrc(lang) {
  let lowerCasedTrimmedLang = lang.replace(/\s/g, "").toLowerCase();
  let imageSrcPath;
  devicon.forEach((icon) => {
    if (
      lowerCasedTrimmedLang.startsWith("c") &&
      lowerCasedTrimmedLang.endsWith("+")
    ) {
      lowerCasedTrimmedLang = "cplusplus";
    }
    if (lowerCasedTrimmedLang == "reactjs") {
      lowerCasedTrimmedLang = "react";
    }
    if (lowerCasedTrimmedLang == "dockerfile") {
      lowerCasedTrimmedLang = "docker";
    }
    if (lowerCasedTrimmedLang == "jupyternotebook") {
      lowerCasedTrimmedLang = "jupyter";
    }
    if (icon.name.includes(lowerCasedTrimmedLang)) {
      imageSrcPath = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${icon.versions.svg[0]}.svg`;
    }
  });
  return imageSrcPath;
}

export function getHexColor(lang) {
  let lowerCasedTrimmedLang = lang.replace(/\s/g, "").toLowerCase();
  let color;
  devicon.forEach((icon) => {
    if (
      lowerCasedTrimmedLang.startsWith("c") &&
      lowerCasedTrimmedLang.endsWith("+")
    ) {
      lowerCasedTrimmedLang = "cplusplus";
    }
    if (lowerCasedTrimmedLang == "reactjs") {
      lowerCasedTrimmedLang = "react";
    }
    if (lowerCasedTrimmedLang == "dockerfile") {
      lowerCasedTrimmedLang = "docker";
    }
    if (lowerCasedTrimmedLang == "jupyternotebook") {
      lowerCasedTrimmedLang = "jupyter";
    }
    if (icon.name.includes(lowerCasedTrimmedLang)) {
      color = icon.color;
    }
  });
  return color;
}

export const getCardMessage = (type, language) => {
  const message = {
    repository: `Learn more about ${language}, by exploring this repository.`,
    question:
      "This issue needs help, it is a great way to get started with a project.",
    blog: `Stay current and learn more about ${language} by reading this blog.`,
  };

  return message[type];
};
