import Card from "@components/card/Card";
import devicon from "@data/devicon.json";

export default function Grid({ cardData }) {
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
  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {cardData.map((cd) => (
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
        ))}
      </div>
    </>
  );
}
