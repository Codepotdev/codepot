import Card from "@components/card/Card";
import devicon from "@data/devicon.json";

function getImageSrc(lang) {
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

export default function Grid({ cardData, typeFilter, languageFilter }) {
  const filteredData = [];

  cardData.forEach((cd) => {
    if (typeFilter.key === "all") {
      if (languageFilter.key === "all") {
        filteredData.push(cd);
      } else if (
        languageFilter.name.toLowerCase() === cd.language.toLowerCase()
      ) {
        filteredData.push(cd);
      }
    } else if (typeFilter.key === cd.type) {
      if (languageFilter.key === "all") {
        filteredData.push(cd);
      } else if (
        languageFilter.name.toLowerCase() === cd.language.toLowerCase()
      ) {
        filteredData.push(cd);
      }
    }
  });

  return (
    <>
      <div className="grid items-stretch gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {filteredData.length > 0 ? (
          filteredData.map((cd) => (
            <Card
              title={cd.title}
              description={cd.description}
              image={cd.image}
              tags={cd.tags}
              link={cd.url}
              type={cd.type}
              id={cd.id}
              key={cd._id}
              language={cd.language}
              imagesrc={getImageSrc(cd.language)}
            />
          ))
        ) : (
          <h1 class="m-32 font-medium leading-tight text-5xl text-black">
            No results found..
          </h1>
        )}
      </div>
    </>
  );
}
